import { User } from "oidc-client";
import react, { useState } from "react";
import ReactTooltip from 'react-tooltip';

export interface IFilters {
    group_by_description?: boolean,
    group_by_unit_metric?: boolean,
    group_by_year?: boolean,
    group_by_cluster?: boolean,
    min_amount?: number,
    max_amount?: number,
    min_homolog_price?: number,
    max_homolog_price?: number,
    body?: string,
    body_type?: string,
    bidder_type?: string,
    bidder_name?: string,
    bidder_document?: string,
    procurement_type?: string,
    modality?: string,
    object_nature?: string,
    city?: string[],
    imediate_region?: string[],
    inter_region?: string[],
    year?: string[],
    month?: string[],
    isPeriod?: boolean,
    before?: string,
    after?: string,
}

const defaultValue: IFilters = {
    group_by_description: false,
    group_by_unit_metric: false,
    group_by_year: false,
    group_by_cluster: false,
    min_amount: undefined,
    max_amount: undefined,
    min_homolog_price: undefined,
    max_homolog_price: undefined,
    body: "",
    body_type: "",
    bidder_type: "",
    bidder_name: "",
    bidder_document: "",
    procurement_type: "",
    modality: "",
    object_nature: "",
    city: [],
    imediate_region: [],
    inter_region: [],
    year: [],
    month: [],
    isPeriod: false,
    before: "",
    after: "",
}

interface globalContextInterface {
    description: null,
    setDescription: react.Dispatch<any>
    searchType: string,
    setSearchType: react.Dispatch<any>
    filters: IFilters,
    setFilters: react.Dispatch<IFilters>
    countFilters: () => number
    onlyByCluster: () => boolean | undefined
    cleanFilters: () => void
    currentUser: User | null,
    setCurrentUser: react.Dispatch<react.SetStateAction<User | null>>
};

export const GlobalStateContext = react.createContext<globalContextInterface>({} as globalContextInterface);

type Props = {
    children: JSX.Element
}

function GlobalContext({ children }: Props) {
    const [description, setDescription] = useState<any>(null);
    const [searchType, setSearchType] = useState<string>("smart");
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [filters, setFilters] = useState<IFilters>({
        group_by_description: false,
        group_by_unit_metric: false,
        group_by_year: false,
        group_by_cluster: false,
    });

    const countFilters = (): number => {
        let count = 0;

        if (filters.group_by_description) count++;
        if (filters.group_by_unit_metric) count++;
        if (filters.group_by_year) count++;
        if (filters.group_by_cluster) count++;

        return count;
    }

    const onlyByCluster = () => filters.group_by_cluster && countFilters() === 1;

    const cleanFilters = () => {
        setFilters({
            group_by_description: false,
            group_by_unit_metric: false,
            group_by_year: false
        });
    }

    return <GlobalStateContext.Provider value={{ description, setDescription, searchType, setSearchType, filters, setFilters, countFilters, onlyByCluster, cleanFilters, currentUser, setCurrentUser }}>
        {children}
    </GlobalStateContext.Provider>
}

export default GlobalContext;