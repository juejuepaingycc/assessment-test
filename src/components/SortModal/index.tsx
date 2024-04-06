import React from "react";
import {
  View, 
  Modal, 
  TouchableOpacity 
} from "react-native";
import {
  Text, 
  useTheme,
  RadioButton,
  Switch
} from "react-native-paper";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { heightPercentageToDP as hp} from "react-native-responsive-screen";

import styles from "./Style";

const FilterModal = (props: {
  filter : string,
  fuzzySearchEnabled : boolean,
  onFilter: (filter : string) => void;
  onClose: () => void;
  onToggleSwitch : () => void;
}) => {

  const {
    filter, 
    fuzzySearchEnabled, 
    onClose, 
    onFilter, 
    onToggleSwitch
  } = props;

  const theme = useTheme();

  return (
    <Modal visible={true} transparent={true} onRequestClose={onClose}>
      <View style={styles.container}>
        <View style={styles.bottomSheet}>
          
          <TouchableOpacity 
            onPress={onClose} 
            style={styles.closeIcon}>
            <AntDesign name="closecircleo" size={hp(3.4)} color="#fff" />
          </TouchableOpacity>

          <View style={styles.modalBox}>

            <View style={styles.searchrow}>
              <Text style={[styles.title, {color : theme.colors.tertiary, paddingTop : 6 }]}>FUZZY SEARCH</Text>
              <Switch value={fuzzySearchEnabled} onValueChange={onToggleSwitch} />
            </View>

            <View style={styles.titleContent}>
              <Text style={[styles.title, {color : theme.colors.tertiary }]}>SORT BY</Text>
              <FontAwesome name="sort" size={hp(1.8)} color={theme.colors.secondary} />
            </View>
          
            <TouchableOpacity
              style={styles.filterItem}
              onPress={() => onFilter('NAME_DESCENDING')}>
                <Text style={[styles.label, {
                  color : theme.colors.primary
                }]}>Name A to Z</Text>
        
                <RadioButton.Android
                  value="NAME_DESCENDING"
                  status={ filter === 'NAME_DESCENDING' ? 'checked' : 'unchecked' }
                  onPress={() => onFilter('NAME_DESCENDING')}
                />
                
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.filterItem}
              onPress={() => onFilter('RANK_ASCENDING')} >
                <Text style={[styles.label, {
                  color : theme.colors.primary
                }]}>Rank Low to High</Text>
        
                <RadioButton.Android
                  value="RANK_ASCENDING"
                  status={ filter === 'RANK_ASCENDING' ? 'checked' : 'unchecked' } 
                  onPress={() => onFilter('RANK_ASCENDING')}/>
                
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.filterItem}
              onPress={() => onFilter('RANK_DESCENDING')} >
                <Text style={[styles.label, {
                  color : theme.colors.primary
                }]}>Rank High to Low</Text>
        
                <RadioButton.Android
                  value="RANK_DESCENDING"
                  status={ filter === 'RANK_DESCENDING' ? 'checked' : 'unchecked' }
                  onPress={() => onFilter('RANK_DESCENDING')}
                />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default FilterModal;
