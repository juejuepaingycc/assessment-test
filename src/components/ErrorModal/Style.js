import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default styles = StyleSheet.create({
    modalView: {
        backgroundColor: 'rgba(0,0,0, 0.8)',
        height: hp(100),
        justifyContent: 'center',
    },
    title: {
        fontFamily: 'Poppins-Bold',
        fontSize: hp(1.9),
        color: '#b59e0b',
        paddingTop: hp(1.4),
        paddingBottom : hp(1)
    },
    modalBg: {
        backgroundColor: '#fff',
        borderRadius: hp(1),
        width: wp(90),
        alignSelf: 'center',
        marginBottom: hp(5),
        alignItems: 'center',
        paddingTop : hp(2)
    },
    descrition: {
        fontFamily: 'Poppins-Regular',
        fontSize: hp(1.8),
        color: '#11212f',
        paddingHorizontal : wp(4),
        textAlign : "center"
    }
})
