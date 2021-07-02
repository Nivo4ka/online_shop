import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {Pagination} from "react-bootstrap";
import './pagination.css'

const PagePagination = observer(() => {
    const {bouquet} = useContext(Context)
    const pageCount = Math.ceil(bouquet.totalCount / bouquet.limit)
    const pages = []

    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1)
    }

    return (
        <Pagination className="mt-3">
            {pages.map(page =>
                <Pagination.Item
                    key={page}
                    active={bouquet.page === page}
                    onClick={() => bouquet.setPage(page)}
                >
                    {page}
                </Pagination.Item>
            )}
        </Pagination>
    );
});

export default PagePagination;