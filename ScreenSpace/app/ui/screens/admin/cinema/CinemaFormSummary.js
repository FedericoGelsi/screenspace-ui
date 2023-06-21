import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Divider, Text, Icon, Layout} from '@ui-kitten/components';
import {useSelector} from 'react-redux';
import I18n from '../../../../assets/strings/I18n';
import TEXT_KEY from '../../../../assets/strings/TextKey';

const CinemaFormSummary = ({header, info}) => {
  const formValues = useSelector(state => state.form);

  return (
    <>
      <Text category="h6" style={styles.title}>
        {header}
      </Text>

      <Layout style={styles.layout}>
        <View style={styles.container}>
          <Layout style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon
              style={{width: 32, height: 32}}
              fill="#8F9BB3"
              name="film-outline"
            />
            <Text category="s1" style={{marginHorizontal: 8}}>
              {I18n.t(TEXT_KEY.cinemaSummary.cinemaText)}
            </Text>
            <Text category="s1" style={{flexGrow: 1, textAlign: 'right'}}>
              {formValues?.cinemaName || info?.cinemaName}
            </Text>
          </Layout>
          <Divider style={styles.divider} />
          <Layout style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon
              style={{width: 32, height: 32}}
              fill="#8F9BB3"
              name="map-outline"
            />
            <Text category="s1" style={{marginHorizontal: 8}}>
              {I18n.t(TEXT_KEY.cinemaSummary.streetText)}
            </Text>
            <Text category="s1" style={{flexGrow: 1, textAlign: 'right'}}>
              {formValues?.address || info?.address}{' '}
              {formValues?.postalCode || info?.postalCode}
            </Text>
          </Layout>
          <Divider style={styles.divider} />
          <Layout style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon
              style={{width: 32, height: 32}}
              fill="#8F9BB3"
              name="navigation-2-outline"
            />
            <Text category="s1" style={{marginHorizontal: 8}}>
              {I18n.t(TEXT_KEY.cinemaSummary.cityText)}
            </Text>
            <Text category="s1" style={{flexGrow: 1, textAlign: 'right'}}>
              {formValues?.city || info?.city}
            </Text>
          </Layout>
          <Divider style={styles.divider} />
          <Layout style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon
              style={{width: 32, height: 32}}
              fill="#8F9BB3"
              name="navigation-2-outline"
            />
            <Text category="s1" style={{marginHorizontal: 8}}>
              {I18n.t(TEXT_KEY.cinemaSummary.provinceText)}
            </Text>
            <Text category="s1" style={{flexGrow: 1, textAlign: 'right'}}>
              {formValues?.province || info?.province}
            </Text>
          </Layout>
          <Divider style={styles.divider} />
          <Layout style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon
              style={{width: 32, height: 32}}
              fill="#8F9BB3"
              name="navigation-2-outline"
            />
            <Text category="s1" style={{marginHorizontal: 8}}>
              {I18n.t(TEXT_KEY.cinemaSummary.countryText)}
            </Text>
            <Text category="s1" style={{flexGrow: 1, textAlign: 'right'}}>
              {formValues?.country || info?.country}
            </Text>
          </Layout>
          <Divider />
        </View>
        <View style={styles.container}>
          <Layout style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon
              style={{width: 32, height: 32}}
              fill="#8F9BB3"
              name="pricetags-outline"
            />
            <Text category="s1" style={{marginHorizontal: 8}}>
              {I18n.t(TEXT_KEY.cinemaSummary.priceText)}
            </Text>
            <Text category="s1" style={{flexGrow: 1, textAlign: 'right'}}>
              ${formValues?.pricePerShow || info?.pricePerShow}
            </Text>
          </Layout>
          <Divider style={styles.divider} />
          <Layout style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon
              style={{width: 32, height: 32}}
              fill="#8F9BB3"
              name="film-outline"
            />
            <Text category="s1" style={{marginHorizontal: 8}}>
              {I18n.t(TEXT_KEY.cinemaSummary.cinemaStatusText)}
            </Text>
            <Text category="s1" style={{flexGrow: 1, textAlign: 'right'}}>
              {formValues?.active === true || info?.active === true
                ? I18n.t(TEXT_KEY.cinemaSummary.cinemaStatusActive)
                : I18n.t(TEXT_KEY.cinemaSummary.cinemaStatusInactive)}
            </Text>
          </Layout>
          <Divider style={styles.divider} />
          <Layout style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon
              style={{width: 32, height: 32}}
              fill="#8F9BB3"
              name="alert-circle-outline"
            />
            <Text category="s1" style={{marginHorizontal: 8}}>
              {I18n.t(TEXT_KEY.cinemaSummary.companyText)}
            </Text>
            <Text category="s1" style={{flexGrow: 1, textAlign: 'right'}}>
              {formValues?.companyName || info?.companyName}
            </Text>
          </Layout>
          <Divider />
        </View>
      </Layout>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginBottom: 20,
    borderRadius: 16,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
    width: '100%',
  },
  divider: {
    marginBottom: 10,
  },
  layout: {
    flex: 1,
    width: '100%',
  },
  title: {
    marginBottom: 10,
  },
});

export default CinemaFormSummary;
