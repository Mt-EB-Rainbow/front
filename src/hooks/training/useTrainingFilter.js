import React, { useState, useMemo } from 'react';
import qs from 'qs';

const defaultFilterValues = {
    category: '',
    domain: [],
    search: '',
};

const useTrainingFilter = () => {
    const [video, setVideo] = useState([]);
    const [filterValues, setFilterValues] = useState({
        ...defaultFilterValues,
        ...qs.parse(window.location.search),
    });

    const submitFilter = filter => {
        setFilterValues(filter);
        window.history.pushState({}, '', '?' + qs.stringify(filter));
    };

    const filteredVideos = useMemo(
        () =>
            video
                .filter(
                    video =>
                        !filterValues.category ||
                        video.category === filterValues.category,
                )
                .filter(
                    video =>
                        !filterValues.domain ||
                        filterValues.domain.length === 0 ||
                        filterValues.domain.includes(video.domain),
                )
                .filter(
                    video =>
                        !filterValues.search ||
                        video.title
                            .toLowerCase()
                            .includes(filterValues.search.toLowerCase()) ||
                        video.description
                            .toLowerCase()
                            .includes(filterValues.search.toLowerCase()),
                ),
        [video, filterValues],
    );

    return {
        videoLength: video.length,
        filteredVideos,
        filterValues,
        submitFilter,
    };
};

export default useTrainingFilter;
