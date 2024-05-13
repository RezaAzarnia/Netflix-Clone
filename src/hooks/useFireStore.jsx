import { db } from '../Services/firebaseConfig'
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, setDoc } from 'firebase/firestore'
import { useToast } from '@chakra-ui/react'
import { useState } from 'react'
export const useFireStore = () => {
    const toast = useToast()
    const [isLoading, setIsLoading] = useState(true)

    const addDocument = async (collectionName, data) => {
        setIsLoading(true);
        try {
            await addDoc(collection(db, collectionName), data);
        } catch (error) {
            console.log(error);
            // Handle error
        } finally {
            setIsLoading(false);
        }
    }
    const isExitInWatchList = async (userId, dataId) => {
        setIsLoading(true)
        try {
            const docRef = doc(
                db,
                "users",
                userId?.toString(),
                "watchlist",
                dataId?.toString()
            )
            const docSnap = await getDoc(docRef)
            return docSnap.exists() ? true : false

        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false)
        }
    }
    const addToWatchlist = async (userId, dataId, data) => {
        setIsLoading(true)
        try {
            await setDoc(doc(db, "users", userId, "watchlist", dataId.toString()), data)
            toast({
                title: "Success",
                description: "added to watchlist",
                status: "success",
                position: "top-right",
                isClosable: true,
            })
        } catch (error) {
            toast({
                title: "Error",
                description: "some error occured!!",
                status: "error",
                position: "top-right",
                isClosable: true,
            })
        } finally {
            setIsLoading(false)
        }
    }
    const removeFromWatchlist = async (userId, dataId) => {
        setIsLoading(true)
        try {
            await deleteDoc(doc(db, "users", userId?.toString(), "watchlist", dataId.toString()));
            toast({
                title: "Success",
                description: "removed from watchlist",
                status: "success",
                position: "top-right",
                isClosable: true,
            })

        } catch (error) {
            toast({
                title: "Error",
                description: "some error occured!!",
                status: "error",
                position: "top-right",
                isClosable: true,
            })
        } finally {
            setIsLoading(false)
        }

    }

    const getWatchlistData = async (userId) => {
        const querySnapShop = await getDocs(
            collection(db, "users", userId, "watchlist")
        )
        const data = querySnapShop.docs.map((doc) => ({
            ...doc.data()
        }))
        setIsLoading(false)
        return data

    }



    return { addDocument, addToWatchlist, removeFromWatchlist, isExitInWatchList, getWatchlistData, isLoading }
}
