import React, {useState, useCallback, useMemo} from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  ViewStyle,
  SafeAreaView,
} from 'react-native';
import {StarFunctionComponent} from '../helpers';
import Icon from '../Icon';

const WEEKDAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export type DateRange = {start: Date | null; end: Date | null};

export type ModalDatePickerProps = {
  /** Controls modal visibility. */
  visible: boolean;
  /** Called when the modal is closed (cancel or backdrop press). */
  onClose: () => void;
  /** Selected date (single mode). */
  value?: Date | null;
  /** Called with the selected date when the user confirms (single mode). */
  onChange?: (date: Date) => void;
  /** Selection mode. */
  mode?: 'single' | 'range';
  /** Selected range (range mode). */
  rangeValue?: DateRange;
  /** Called with the selected range when the user confirms (range mode). */
  onRangeChange?: (range: DateRange) => void;
  /** Modal header title. */
  title?: string;
  /** Confirm button label. */
  confirmText?: string;
  /** Cancel button label. */
  cancelText?: string;
  /** Earliest selectable date. */
  minDate?: Date;
  /** Latest selectable date. */
  maxDate?: Date;
  containerStyle?: StyleProp<ViewStyle>;
};

function isSameDay(a: Date | null, b: Date | null): boolean {
  if (!a || !b) return false;
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function startOfDay(date: Date): number {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();
}

function isInRange(date: Date, start: Date | null, end: Date | null): boolean {
  if (!start || !end) return false;
  const d = startOfDay(date);
  return d > startOfDay(start) && d < startOfDay(end);
}

function buildCalendarDays(year: number, month: number): (number | null)[] {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const days: (number | null)[] = Array(firstDay).fill(null);
  for (let d = 1; d <= daysInMonth; d++) days.push(d);
  while (days.length % 7 !== 0) days.push(null);
  return days;
}

export const ModalDatePicker: StarFunctionComponent<ModalDatePickerProps> = ({
  visible,
  onClose,
  value,
  onChange,
  mode = 'single',
  rangeValue,
  onRangeChange,
  title = 'Select date',
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  minDate,
  maxDate,
  containerStyle,
  theme,
}) => {
  const today = useMemo(() => new Date(), []);
  const initialDate = value ?? rangeValue?.start ?? today;

  const [viewYear, setViewYear] = useState(initialDate.getFullYear());
  const [viewMonth, setViewMonth] = useState(initialDate.getMonth());
  const [selectedSingle, setSelectedSingle] = useState<Date | null>(value ?? null);
  const [range, setRange] = useState<DateRange>(
    rangeValue ?? {start: null, end: null},
  );

  const primaryColor = theme?.colors?.primary ?? '#FF6B19';
  const days = useMemo(
    () => buildCalendarDays(viewYear, viewMonth),
    [viewYear, viewMonth],
  );

  const isDisabledDate = useCallback(
    (date: Date): boolean => {
      if (minDate && startOfDay(date) < startOfDay(minDate)) return true;
      if (maxDate && startOfDay(date) > startOfDay(maxDate)) return true;
      return false;
    },
    [minDate, maxDate],
  );

  const goToPrevMonth = useCallback(() => {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear(y => y - 1);
    } else {
      setViewMonth(m => m - 1);
    }
  }, [viewMonth]);

  const goToNextMonth = useCallback(() => {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear(y => y + 1);
    } else {
      setViewMonth(m => m + 1);
    }
  }, [viewMonth]);

  const handleDayPress = useCallback(
    (day: number) => {
      const date = new Date(viewYear, viewMonth, day);
      if (isDisabledDate(date)) return;

      if (mode === 'single') {
        setSelectedSingle(date);
      } else {
        // range: first tap sets start, second tap sets end (if after start), else resets
        if (!range.start || range.end) {
          setRange({start: date, end: null});
        } else if (startOfDay(date) < startOfDay(range.start)) {
          setRange({start: date, end: null});
        } else {
          setRange({start: range.start, end: date});
        }
      }
    },
    [viewYear, viewMonth, mode, range, isDisabledDate],
  );

  const handleConfirm = useCallback(() => {
    if (mode === 'single' && selectedSingle) {
      onChange?.(selectedSingle);
    } else if (mode === 'range') {
      onRangeChange?.(range);
    }
    onClose();
  }, [mode, selectedSingle, range, onChange, onRangeChange, onClose]);

  const handleCancel = useCallback(() => {
    setSelectedSingle(value ?? null);
    setRange(rangeValue ?? {start: null, end: null});
    onClose();
  }, [value, rangeValue, onClose]);

  const canConfirm =
    mode === 'single' ? !!selectedSingle : !!(range.start && range.end);

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={handleCancel}
    >
      <View style={styles.overlay}>
        <TouchableOpacity
          style={styles.backdrop}
          onPress={handleCancel}
          activeOpacity={1}
        />
        <SafeAreaView style={[styles.sheet, containerStyle]}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity
              onPress={handleCancel}
              hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
            >
              <Icon name="x" type="feather" size={22} color="#333333" />
            </TouchableOpacity>
          </View>

          {/* Month navigation */}
          <View style={styles.monthNav}>
            <TouchableOpacity
              onPress={goToPrevMonth}
              hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
            >
              <Icon name="chevron-left" type="feather" size={22} color="#333333" />
            </TouchableOpacity>
            <Text style={styles.monthLabel}>
              {MONTHS[viewMonth]} {viewYear}
            </Text>
            <TouchableOpacity
              onPress={goToNextMonth}
              hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
            >
              <Icon name="chevron-right" type="feather" size={22} color="#333333" />
            </TouchableOpacity>
          </View>

          {/* Weekday headers */}
          <View style={styles.weekRow}>
            {WEEKDAYS.map(wd => (
              <Text key={wd} style={styles.weekDay}>
                {wd}
              </Text>
            ))}
          </View>

          {/* Day grid */}
          <View style={styles.grid}>
            {days.map((day, idx) => {
              if (!day) return <View key={idx} style={styles.dayCell} />;

              const date = new Date(viewYear, viewMonth, day);
              const disabled = isDisabledDate(date);
              const isToday = isSameDay(date, today);
              const isStart = isSameDay(date, range.start);
              const isEnd = isSameDay(date, range.end);
              const inRange = isInRange(date, range.start, range.end);
              const selected =
                mode === 'single'
                  ? isSameDay(date, selectedSingle)
                  : isStart || isEnd;

              return (
                <TouchableOpacity
                  key={idx}
                  onPress={() => handleDayPress(day)}
                  disabled={disabled}
                  activeOpacity={0.7}
                  style={[
                    styles.dayCell,
                    inRange && {backgroundColor: primaryColor + '20'},
                    mode === 'range' && isStart && !isEnd && styles.rangeStartCell,
                    mode === 'range' && isEnd && !isStart && styles.rangeEndCell,
                  ]}
                >
                  <View
                    style={[
                      styles.dayInner,
                      selected && {backgroundColor: primaryColor},
                      isToday && !selected && {
                        borderWidth: 1,
                        borderColor: primaryColor,
                      },
                    ]}
                  >
                    <Text
                      style={[
                        styles.dayText,
                        selected && {color: '#FFFFFF'},
                        isToday && !selected && {color: primaryColor},
                        disabled && styles.dayDisabled,
                      ]}
                    >
                      {day}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>

          {/* Actions */}
          <View style={styles.actions}>
            <TouchableOpacity onPress={handleCancel} style={styles.cancelBtn}>
              <Text style={styles.cancelText}>{cancelText}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleConfirm}
              disabled={!canConfirm}
              style={[
                styles.confirmBtn,
                {backgroundColor: primaryColor},
                !canConfirm && styles.confirmDisabled,
              ]}
            >
              <Text style={styles.confirmText}>{confirmText}</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  sheet: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingBottom: 8,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#EEEEEE',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
  },
  monthNav: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  monthLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
  },
  weekRow: {
    flexDirection: 'row',
    paddingHorizontal: 8,
  },
  weekDay: {
    flex: 1,
    textAlign: 'center',
    fontSize: 12,
    color: '#999999',
    paddingVertical: 4,
    fontWeight: '500',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 8,
  },
  dayCell: {
    width: `${100 / 7}%` as any,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 2,
  },
  rangeStartCell: {
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  rangeEndCell: {
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  dayInner: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dayText: {
    fontSize: 14,
    color: '#333333',
  },
  dayDisabled: {
    color: '#CCCCCC',
  },
  actions: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
    gap: 12,
  },
  cancelBtn: {
    flex: 1,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#DDDDDD',
  },
  cancelText: {
    fontSize: 15,
    color: '#666666',
    fontWeight: '500',
  },
  confirmBtn: {
    flex: 1,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  confirmDisabled: {
    opacity: 0.4,
  },
  confirmText: {
    fontSize: 15,
    color: '#FFFFFF',
    fontWeight: '600',
  },
});

ModalDatePicker.displayName = 'ModalDatePicker';
