import react, { useState } from "react";

export interface IFilters {
    group_by_description?: boolean,
    group_by_unit_metric?: boolean,
    group_by_year?: boolean,
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
    year?: string[],
    month?: string[],
    isPeriod?: boolean,
    before?: string,
    after?: string,
}

interface globalContextInterface {
    description: null,
    setDescription: react.Dispatch<any>
    filters: IFilters,
    setFilters: react.Dispatch<IFilters>
    countFilters: () => number
};

export const GlobalStateContext = react.createContext<globalContextInterface>({} as globalContextInterface);

type Props = {
    children: JSX.Element
}

function GlobalContext({ children }: Props) {
    const [description, setDescription] = useState<any>(null);
    const [filters, setFilters] = useState<IFilters>({});
    const countFilters = (): number => {
        let count = 0;

        if (filters.group_by_description) count++;
        if (filters.group_by_unit_metric) count++;
        if (filters.group_by_year) count++;

        return count;
    }

    return <GlobalStateContext.Provider value={{ description, setDescription, filters, setFilters, countFilters }}>
        {children}
    </GlobalStateContext.Provider>
}

export default GlobalContext;