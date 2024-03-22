/* eslint-disable no-useless-catch */
import AsyncStorage from "@react-native-async-storage/async-storage";

import { PLAYER_COLLECTION } from "@storage/storageConfig";
import { playersGetByGroup } from "./playersGetGroup";

export const playerRemoveByGroup = async (name: string, group: string) => {
    try {
        const storage = await playersGetByGroup(group);

        const filtered = storage.filter(player => player.name !== name);
        const players = JSON.stringify(filtered);

        await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, players);


    } catch (error) {
        throw (error);
    }
}