import '@styles/pages/FilterPage.scss';
import Header from '@components/Header';
import Footer from '@components/Footer';
import { useParams } from "react-router-dom";
import { getFilters, getTag } from '@api/filter';
import simpleGet from '@api/simpleGet';
import useSWR from 'swr';
import { useState, useEffect } from 'react';

function FilterPage() {
    const { id } = useParams();
    const tag = getTag(id);
    const { data, error, isLoading } = useSWR(`${tag}/${id}`, () => getFilters(tag, id));

    const [filterOptions, setFilterOptions] = useState({});

    useEffect(() => {
        const fetchOptions = async () => {
            if (data) {
                const optionsPromises = data.items.map(async (item) => {
                    if (item.object_route) {
                        const result = await simpleGet(item.object_route);
                        return { [item.filter_name]: result.items };
                    }
                    return { [item.filter_name]: [] };
                });

                const options = await Promise.all(optionsPromises);
                console.log(options)
                const optionsMap = options.reduce((acc, option) => {
                    return { ...acc, ...option };
                }, {});
                console.log(optionsMap)

                setFilterOptions(optionsMap);
            }
        };

        fetchOptions();
    }, [data]);

    return (
        <>
            <Header />
            <section className="filter-page">
                <div className="filter-page__holder block-normalizer">
                    <div className="filter-page__filter-block">
                        {data?.items.map((item) => (
                            <div className="filter-page__single-filter" key={item.filter_name}>
                                <span className="filter-page__filter-name">{item.filter_name}</span>
                                {console.log(item)}
                                {item.object_route ? (
                                    <select className="filter-page__filter-input" defaultValue="">
                                        <option className="filter-page__filter-option" value="" disabled hidden>Select an option</option>
                                        {filterOptions[item.filter_name]?.map((obj) => (
                                            <option className="filter-page__filter-option" key={obj.id} value={obj.name}>{obj.name}</option>
                                        ))}
                                    </select>
                                ) : (
                                    item.filter_type === 'int' ? (
                                        <input className="filter-page__filter-input" type="number" />
                                    ) : item.filter_type === 'string' ? (
                                        <input className="filter-page__filter-input" type="text" />
                                    ) : item.filter_type === 'bool' ? (
                                        <input className="filter-page__filter-checkbox" type="checkbox" />
                                    ) : item.filter_type === 'between' ? (
                                        <div className="filter-page__between-holder">
                                            <input className="filter-page__filter-input filter-page__filter-between filter-page__filter-between_left" type="number" />
                                            <input className=" filter-page__filter-input filter-page__filter-between filter-page__filter-between_right" type="number" />
                                        </div>
                                    ) : null
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="filter-page__goods-block">
                        <h1>Временно выгрузил все сюда</h1>
                        {isLoading ? <span>Loading...</span> : null}
                        {error ? <span>Error loading data</span> : null}
                        {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : null}
                    </div>
                </div>
            </section>
            <div id="modal-root"></div>
            <Footer />
        </>
    );
}

export default FilterPage;
