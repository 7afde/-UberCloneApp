import { View, Text, Image } from "react-native";
import React from "react";
import { Ride } from "@/types/type";
import { icons } from "@/constants";
import { formatDate, formatTime } from "@/lib/utils";

const RideCard = ({
  ride: {
    destination_address,
    destination_latitude,
    destination_longitude,
    origin_address,
    created_at,
    ride_time,
    driver,
    payment_status,
  },
}: {
  ride: Ride;
}) => {
  return (
    <View className="mb-3 flex-row items-center justify-center rounded-lg bg-white shadow-sm shadow-neutral-300">
      <View className="items-center justify-between p-3">
        <View className="mb-3 flex-row items-center justify-center">
          <Image
            source={{
              uri: `https://maps.geoapify.com/v1/staticmap?style=osm-bright&width=600&height=400&center=lonlat:${destination_longitude},${destination_latitude}&zoom=14&apiKey=${process.env.EXPO_PUBLIC_GEOAPIFY_API_KEY}`,
            }}
            className="h-[90px] w-[80px] rounded-lg"
            resizeMode="cover"
          />

          <View className="mx-5 flex-1 gap-y-5">
            <View className="flex-row items-center gap-x-2">
              <Image source={icons.to} className="h-5 w-5" />
              <Text className="text-md font-JakartaMedium" numberOfLines={1}>
                {origin_address}
              </Text>
            </View>

            <View className="flex-row items-center gap-x-2">
              <Image source={icons.point} className="h-5 w-5" />
              <Text className="text-md font-JakartaMedium" numberOfLines={1}>
                {destination_address}
              </Text>
            </View>
          </View>
        </View>

        <View className="mt-5 w-full items-start justify-center rounded-lg bg-general-500 p-3">
          <View className="mb-5 w-full flex-row items-center justify-between">
            <Text className="text-md font-JakartaMedium text-gray-500">
              Date & Time
            </Text>
            <Text className="text-md font-JakartaMedium text-black">
              {formatDate(created_at)}, {formatTime(ride_time)}
            </Text>
          </View>

          <View className="mb-5 w-full flex-row items-center justify-between">
            <Text className="text-md font-JakartaMedium text-gray-500">
              Driver
            </Text>
            <Text className="text-md font-JakartaMedium text-black">
              {driver.first_name} {driver.last_name}
            </Text>
          </View>

          <View className="mb-5 w-full flex-row items-center justify-between">
            <Text className="text-md font-JakartaMedium text-gray-500">
              Car seats
            </Text>
            <Text className="text-md font-JakartaMedium text-black">
              {driver.car_seats}
            </Text>
          </View>

          <View className="mb-5 w-full flex-row items-center justify-between">
            <Text className="text-md font-JakartaMedium text-gray-500">
              Payment Status
            </Text>
            <Text
              className={`text-md font-JakartaMedium capitalize text-black ${payment_status === "paid" ? "text-green-500" : "text-red-500"}`}
            >
              {payment_status}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default RideCard;
