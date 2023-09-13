import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { Dimensions } from "react-native";

const Travel = () => {
  const { width, height } = Dimensions.get("window");
  const images = [
    {
      title: "Foods",
      image: (
        <Image
          resizeMode="cover"
          style={{
            margin: 15,
            width: 50,
            height: 50,
            borderWidth: 2,
            borderColor: "#FEBD2F",
            borderRadius: 100,
          }}
          source={require("@/assets/images/food.png")}
        />
      ),
    },
    {
      title: "Groceries",
      image: (
        <Image
          resizeMode="cover"
          style={{
            margin: 15,
            width: 50,
            height: 50,
            borderWidth: 2,
            borderColor: "#FEBD2F",

            borderRadius: 100,
          }}
          source={require("@/assets/images/groceries.png")}
        />
      ),
    },
    {
      title: "Hotels",
      image: (
        <Image
          resizeMode="cover"
          style={{
            margin: 15,
            width: 50,
            height: 50,
            borderWidth: 2,
            borderColor: "#FEBD2F",

            borderRadius: 100,
          }}
          source={require("@/assets/images/hotel.png")}
        />
      ),
    },
    {
      title: "Events",
      image: (
        <Image
          resizeMode="cover"
          style={{
            margin: 15,
            width: 50,
            height: 50,
            borderWidth: 2,
            borderColor: "#FEBD2F",

            borderRadius: 100,
          }}
          source={require("@/assets/images/events.png")}
        />
      ),
    },
  ];
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
      }}
    >
      <View
        style={{
          backgroundColor: "white",
          width: "20%",
          borderWidth: 1,
          justifyContent: "flex-start",
          gap: 50,
          alignItems: "center",
          height: "100%",
        }}
      >
        {images.map((image) => {
          return (
            <View
              key={image.title}
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {image.image}
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 18,
                  color: "black",
                }}
              >
                {image.title}
              </Text>
            </View>
          );
        })}
      </View>
      <ScrollView
        style={{
          backgroundColor: "white",
          borderWidth: 1,
          padding: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
            justifyContent: "space-around",
          }}
        >
          <Image
            resizeMode="cover"
            style={{
              margin: 15,
              width: 50,
              height: 50,
              borderWidth: 2,
              borderColor: "#FEBD2F",
              borderRadius: 100,
            }}
            source={require("@/assets/images/Ellipse1.png")}
          />
          <Image
            resizeMode="cover"
            style={{
              margin: 15,
              width: 50,
              height: 50,
              borderWidth: 2,
              borderColor: "#FEBD2F",

              borderRadius: 100,
            }}
            source={require("@/assets/images/Ellipse2.png")}
          />
          <Image
            resizeMode="cover"
            style={{
              margin: 15,
              width: 50,
              height: 50,
              borderWidth: 2,
              borderColor: "#FEBD2F",

              borderRadius: 100,
            }}
            source={require("@/assets/images/Ellipse3.png")}
          />
          <Image
            resizeMode="cover"
            style={{
              margin: 15,
              width: 50,
              height: 50,
              borderWidth: 2,
              borderColor: "#FEBD2F",

              borderRadius: 100,
            }}
            source={require("@/assets/images/Ellipse4.png")}
          />
          <Image
            resizeMode="cover"
            style={{
              margin: 15,
              width: 50,
              height: 50,
              borderWidth: 2,
              borderColor: "#FEBD2F",

              borderRadius: 100,
            }}
            source={require("@/assets/images/Ellipse5.png")}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontWeight: "bold" }}>Popular Destinations</Text>
          <Text style={{ fontWeight: "bold", color: "#FEBD2F" }}>
            `${"Show All >"}`{" "}
          </Text>
        </View>
        <View>
          <ScrollView horizontal>
            {[1, 2, 3, 4].map((item) => {
              return (
                <View
                  key={item}
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 15,
                    marginRight: 25,
                    // width: width * 0.25,

                  }}
                >
                  <Image
                    resizeMode="cover"
                    style={{
                      // width: 50,
                      // height: 50,
                      borderWidth: 2,
                      borderRadius: 13,
                    }}
                    source={require("@/assets/images/destination.png")}
                  />
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 36,
                    }}
                  >
                    Tranquil Books & Coffee
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text>2.5km</Text>
                    <View
                      style={{
                        padding: 5,
                        backgroundColor: "green",
                        borderRadius: 5,
                      }}
                    >
                      <Text style={{ color: "white" }}>4.5</Text>
                    </View>
                  </View>
                </View>
              );
            })}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

export default Travel;
