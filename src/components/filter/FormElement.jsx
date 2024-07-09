import '@styles/pages/FilterPage.scss';
import simpleGet from '@api/simpleGet';
import useSWR from 'swr';
import { useState, useEffect } from 'react';
import { useForm, FormProvider, useFormContext } from "react-hook-form";


function FormElement({ data }) {
    const { register } = useFormContext();
    const [filterOptions, setFilterOptions] = useState({});
    const { data: fetchedData, error } = useSWR(data.object_route ? data.object_route : null, simpleGet);

    useEffect(() => {
        if (fetchedData) {
            setFilterOptions(fetchedData);
        }
    }, [fetchedData]);

    return (
        <div className="filter-page__single-filter" key={data.filter_name}>
            <span className="filter-page__filter-name">{data.filter_name}</span>
            {data.object_route ? (
                <select {...register(data.filter_name)} className="filter-page__filter-input" defaultValue="">
                    <option className="filter-page__filter-option" value="" disabled hidden>Select an option</option>
                    {filterOptions.items && filterOptions.items.map((obj) => {
                        return <option className="filter-page__filter-option" key={obj.id} value={obj.id}>{obj.name}</option>;
                    })}
                </select>
            ) : (
                data.filter_type === 'int' ? (
                    <input {...register(data.filter_name)} className="filter-page__filter-input" type="number" />
                ) : data.filter_type === 'string' ? (
                    <input {...register(data.filter_name)} className="filter-page__filter-input" type="text" />
                ) : data.filter_type === 'between' ? (
                    <div className="filter-page__between-holder">
                        <input {...register(`${data.filter_name}.left`)} className="filter-page__filter-input filter-page__filter-between filter-page__filter-between_left" type="number" />
                        <input {...register(`${data.filter_name}.right`)} className=" filter-page__filter-input filter-page__filter-between filter-page__filter-between_right" type="number" />
                    </div>
                ) : null
            )}
        </div>
    );
}

export default FormElement;