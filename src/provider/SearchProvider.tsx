import axios from 'axios';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import Const from '../common/const';
import { createURL, getIdByUrlPrams, gtagconfig } from '../common/utils';
import { SearchContext } from '../context/SearchContext';
import GetIndexDataReq from '../types/GetIndexDataReq';
import GetIndexDataRes, { Item } from '../types/GetIndexDataRes';

const SearchProvider = ({ children }: { children: any }) => {

    const [order, setOrder] = useState('relevance');
    const [kind, setKind] = useState('all');
    const [errorMsg, setErrorMsg] = useState('');
    const [q, setKeyword] = useState('');
    const [value, setValue] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const onSearch = async (word?: string) => {
        setIsLoading(true);
        setErrorMsg('');
        const prams: GetIndexDataReq = {
            q: word? word : q,
            order: order,
            kind: kind,
        }
        try {
            const response: GetIndexDataRes = await axios({
                method: 'GET',
                url: createURL(Const.URLS.GET_POST, prams),
            });
            setItems(response.data);
            setTimeout(() => {
                window.scrollTo(0, 0)
            }, 0)
        } catch (error) {
            console.log(error);
            setErrorMsg('動画取得で予期せぬエラーが発生しました');
        } finally {
            setIsLoading(false);
        }
    }

    const item: Item = {
        kind: 'niconico',
        id: '',
        publishTime: '',
        channelTitle: '',
        liveBroadcastContent: '',
        description: '',
        thumbnail: '',
        title: '',
        channelId: '',
    }
    const [items, setItems]: [Item[], Dispatch<SetStateAction<Item[]>>]
        = useState([item])

    useEffect(() => {
        const word = getIdByUrlPrams();
        setKeyword(word);
        gtagconfig();
        onSearch(word);
    }, [window.location.href]);

    return (
        <SearchContext.Provider
            value={{
                q,
                setKeyword,
                onSearch,
                errorMsg,
                items,
                value,
                setValue,
                isLoading,
                order,
                setOrder,
                kind,
                setKind,
            }}
        >
            {children}
        </SearchContext.Provider >
    )
}

export default SearchProvider;