import React, {useState, useCallback, useMemo} from 'react';
import {
  View,
  Text,
  Modal,
  FlatList,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
  Platform,
  KeyboardAvoidingView,
  SafeAreaView,
} from 'react-native';
import {StarFunctionComponent} from '../helpers';
import Icon from '../Icon';

export type DropdownItem<T = any> = {
  label: string;
  value: T;
};

export type DropdownProps<T = any> = {
  /** Data array of selectable items. */
  data: DropdownItem<T>[];
  /** Currently selected value. */
  value?: T | null;
  /** Called when the user selects an item. */
  onChange: (item: DropdownItem<T>) => void;
  /** Placeholder text shown when no item is selected. */
  placeholder?: string;
  /** Label displayed above the input. */
  label?: string;
  /** Error message shown below the input. */
  errorMessage?: string;
  /** Disable interaction. */
  disabled?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  inputContainerStyle?: StyleProp<ViewStyle>;
  placeholderStyle?: StyleProp<TextStyle>;
  selectedTextStyle?: StyleProp<TextStyle>;
  labelStyle?: StyleProp<TextStyle>;
  errorStyle?: StyleProp<TextStyle>;
  listContainerStyle?: StyleProp<ViewStyle>;
  listItemStyle?: StyleProp<ViewStyle>;
  listItemTextStyle?: StyleProp<TextStyle>;
  selectedItemStyle?: StyleProp<ViewStyle>;
  selectedItemTextStyle?: StyleProp<TextStyle>;
  /** Enable search/filter inside the modal. */
  searchable?: boolean;
  searchPlaceholder?: string;
  /** Custom item renderer. */
  renderItem?: (item: DropdownItem<T>, selected: boolean) => React.ReactElement;
  /** Max height of the item list. */
  maxHeight?: number;
  /** Title shown in the modal header. Defaults to label ?? placeholder. */
  modalTitle?: string;
};

export const Dropdown: StarFunctionComponent<DropdownProps> = ({
  data,
  value,
  onChange,
  placeholder = 'Select an option',
  label,
  errorMessage,
  disabled = false,
  containerStyle,
  inputContainerStyle,
  placeholderStyle,
  selectedTextStyle,
  labelStyle,
  errorStyle,
  listContainerStyle,
  listItemStyle,
  listItemTextStyle,
  selectedItemStyle,
  selectedItemTextStyle,
  searchable = false,
  searchPlaceholder = 'Search...',
  renderItem,
  maxHeight = 320,
  modalTitle,
  theme,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [search, setSearch] = useState('');

  const primaryColor = theme?.colors?.primary ?? '#FF6B19';
  const errorColor = theme?.colors?.error ?? '#FF3F72';

  const selectedItem = useMemo(
    () => data.find(item => item.value === value) ?? null,
    [data, value],
  );

  const filtered = useMemo(
    () =>
      search.trim()
        ? data.filter(item =>
            item.label.toLowerCase().includes(search.toLowerCase()),
          )
        : data,
    [data, search],
  );

  const open = useCallback(() => {
    if (!disabled) setModalVisible(true);
  }, [disabled]);

  const close = useCallback(() => {
    setSearch('');
    setModalVisible(false);
  }, []);

  const handleSelect = useCallback(
    (item: DropdownItem) => {
      onChange(item);
      setSearch('');
      setModalVisible(false);
    },
    [onChange],
  );

  return (
    <View style={[styles.container, containerStyle]}>
      {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}

      <TouchableOpacity
        onPress={open}
        disabled={disabled}
        activeOpacity={0.7}
        accessibilityRole="combobox"
        accessibilityState={{disabled, expanded: modalVisible}}
        style={[
          styles.inputContainer,
          {
            borderColor: errorMessage
              ? errorColor
              : disabled
              ? '#CCCCCC'
              : '#DDDDDD',
          },
          disabled && styles.inputDisabled,
          inputContainerStyle,
        ]}
      >
        <Text
          numberOfLines={1}
          style={[
            styles.inputText,
            !selectedItem && [styles.placeholder, placeholderStyle],
            selectedItem && selectedTextStyle,
            disabled && {color: '#AAAAAA'},
          ]}
        >
          {selectedItem?.label ?? placeholder}
        </Text>
        <Icon
          name={modalVisible ? 'chevron-up' : 'chevron-down'}
          type="feather"
          size={18}
          color={disabled ? '#AAAAAA' : '#666666'}
        />
      </TouchableOpacity>

      {!!errorMessage && (
        <Text style={[styles.errorText, {color: errorColor}, errorStyle]}>
          {errorMessage}
        </Text>
      )}

      <Modal
        visible={modalVisible}
        transparent
        animationType="slide"
        onRequestClose={close}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={styles.overlay}
        >
          <TouchableOpacity
            style={styles.backdrop}
            onPress={close}
            activeOpacity={1}
          />
          <SafeAreaView style={[styles.sheet, listContainerStyle]}>
            <View style={styles.sheetHeader}>
              <Text style={styles.sheetTitle}>
                {modalTitle ?? label ?? placeholder}
              </Text>
              <TouchableOpacity
                onPress={close}
                hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
              >
                <Icon name="x" type="feather" size={22} color="#333333" />
              </TouchableOpacity>
            </View>

            {searchable && (
              <View style={styles.searchRow}>
                <Icon name="search" type="feather" size={16} color="#999999" />
                <TextInput
                  style={styles.searchInput}
                  value={search}
                  onChangeText={setSearch}
                  placeholder={searchPlaceholder}
                  placeholderTextColor="#AAAAAA"
                  autoCorrect={false}
                />
              </View>
            )}

            <FlatList
              data={filtered}
              keyExtractor={(_, idx) => String(idx)}
              style={{maxHeight}}
              keyboardShouldPersistTaps="handled"
              renderItem={({item}) => {
                const isSelected = item.value === value;
                if (renderItem) return renderItem(item, isSelected);
                return (
                  <TouchableOpacity
                    onPress={() => handleSelect(item)}
                    activeOpacity={0.6}
                    style={[
                      styles.listItem,
                      isSelected && {backgroundColor: primaryColor + '18'},
                      listItemStyle,
                      isSelected && selectedItemStyle,
                    ]}
                  >
                    <Text
                      style={[
                        styles.listItemText,
                        isSelected && {color: primaryColor, fontWeight: '600'},
                        listItemTextStyle,
                        isSelected && selectedItemTextStyle,
                      ]}
                    >
                      {item.label}
                    </Text>
                    {isSelected && (
                      <Icon
                        name="check"
                        type="feather"
                        size={18}
                        color={primaryColor}
                      />
                    )}
                  </TouchableOpacity>
                );
              }}
              ListEmptyComponent={
                <Text style={styles.empty}>No results found</Text>
              }
            />
          </SafeAreaView>
        </KeyboardAvoidingView>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  label: {
    fontSize: 14,
    color: '#333333',
    marginBottom: 6,
    fontWeight: '500',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
  },
  inputDisabled: {
    backgroundColor: '#F5F5F5',
  },
  inputText: {
    fontSize: 16,
    color: '#333333',
    flex: 1,
    marginRight: 8,
  },
  placeholder: {
    color: '#AAAAAA',
  },
  errorText: {
    fontSize: 12,
    marginTop: 4,
  },
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
  sheetHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#EEEEEE',
  },
  sheetTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 12,
    paddingHorizontal: 12,
    height: 40,
    borderRadius: 8,
    backgroundColor: '#F5F5F5',
    gap: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#333333',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#F0F0F0',
  },
  listItemText: {
    fontSize: 15,
    color: '#333333',
    flex: 1,
  },
  empty: {
    textAlign: 'center',
    color: '#AAAAAA',
    padding: 24,
    fontSize: 14,
  },
});

Dropdown.displayName = 'Dropdown';
