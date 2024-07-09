import '@styles/pages/FilterPage.scss';
import Header from '@components/Header';
import Footer from '@components/Footer';
import FormElement from '@components/filter/FormElement';
import { useParams } from "react-router-dom";
import { getFilters, getTag } from '@api/filter';
import { useState } from 'react';
import useSWR from 'swr';
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { filteredItems, apiTags } from "@api/filteredItems"


function FilterPage() {
    const { id } = useParams();
    const tag = getTag(id);
    const { data, error, isLoading } = useSWR(`${tag}/${id}`, () => getFilters(tag, id));
    const [filterResult, setFilterResult] = useState();

    const methods = useForm();
    const { handleSubmit, watch, formState: { errors } } = methods
    const onSubmit = async qdata => setFilterResult(await filteredItems(apiTags.paginator_filter, id, qdata));
    console.log(filterResult)


    return (
        <>
            <Header />
            <section className="filter-page">
                <div className="filter-page__holder block-normalizer">
                    <FormProvider {...methods} >
                        <form onSubmit={handleSubmit(onSubmit)} className="filter-page__filter-block">
                            {data?.items.map((item) => {
                                return item.filter_type !== "bool" && <FormElement key={item.filter_name} data={item} />;
                            })}
                            <button className="button red-button">Apply</button>
                        </form>
                    </FormProvider >
                    <div className="filter-page__goods-block">
                        <h1>Результат фильтрации</h1>
                        {filterResult && <><span>Статус запроса: {filterResult.status}</span> <span>Время выполнения: {filterResult.duration}</span></>}
                        
                    </div>
                </div>
            </section>
            <div id="modal-root"></div>
            <Footer />
        </>
    );
}

export default FilterPage;
