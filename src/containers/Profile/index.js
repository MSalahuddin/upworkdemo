import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';

import styles from './style';
import * as Components from '../../components';

function Profile() {
  return (
    <>
      <View style={styles.header}>
        <Image
          style={styles.avatar}
          source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}
        />
      </View>
      <ScrollView style={styles.container}>
        {/* all screen body */}
        <View style={styles.body}>
          {/*  */}

          <View style={styles.infoContainer}>
            <View style={styles.nameContainer}>
              <Text style={styles.name}>From: Darren</Text>
            </View>
            {/*  */}
            <View style={styles.lineContainer}>
              <View style={styles.hWidth} />
              <Components.Button title={'Bank account'} />
              <View style={styles.hWidth} />
            </View>

            {/*  */}
            <View style={styles.nameContainer}>
              <Text style={styles.name}>11 Aug 2018</Text>
            </View>
            {/*  */}
            <View style={{...styles.nameContainer, ...{marginTop: 25}}}>
              <Text style={styles.amount}>$14,311</Text>
            </View>
          </View>

          {/*  */}
          <View style={styles.tenantContainer}>
            <View style={styles.tenantSubContainer}>
              <Text style={styles.heading}>Tenant</Text>
              <Components.Button title={'View all transaction'} />
            </View>
            <View
              style={{
                ...styles.tenantSubContainer,
                ...{
                  marginTop: 25,
                  justifyContent: 'center',
                  width: '60%',
                  alignItems: 'center',
                },
              }}>
              <Image
                style={{width: 40, height: 40, borderRadius: 20}}
                source={{
                  uri: 'https://bootdey.com/img/Content/avatar/avatar6.png',
                }}
              />
              <View style={styles.nameHead}>
                <Text style={styles.txt}>Darrel Steward</Text>
              </View>
            </View>
          </View>

          {/*  */}
          <View style={styles.tenantContainer}>
            <View style={styles.tenantSubContainer}>
              <Text style={styles.heading}>Building</Text>
              <Components.Button title={'View all transaction'} />
            </View>
            <View
              style={{
                ...styles.tenantSubContainer,
                ...{
                  marginTop: 25,
                  justifyContent: 'center',
                  width: '60%',
                  alignItems: 'center',
                },
              }}>
              <Image
                style={{width: 40, height: 40, borderRadius: 20}}
                source={{
                  uri: 'https://bootdey.com/img/Content/avatar/avatar6.png',
                }}
              />
              <View style={styles.nameHead}>
                <Text style={styles.txt}>89 Great Street</Text>
              </View>
            </View>
          </View>
          {/*  */}
          <View style={styles.tenantContainer}>
            <View style={styles.tenantSubContainer}>
              <Text style={styles.heading}>Unit</Text>
              <Components.Button title={'View all transaction'} />
            </View>
            <View
              style={{
                ...styles.tenantSubContainer,
                ...{
                  marginTop: 25,
                  justifyContent: 'center',
                  width: '60%',
                  alignItems: 'center',
                },
              }}>
              <Image
                style={{width: 40, height: 40, borderRadius: 20}}
                source={{
                  uri: 'https://bootdey.com/img/Content/avatar/avatar6.png',
                }}
              />
              <View style={styles.nameHead}>
                <Text style={styles.txt}>89 Great Street</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

export default Profile;
