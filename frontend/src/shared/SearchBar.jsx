import React, { useRef } from "react";
import './search-bar.css';
import { Col, Form, FormGroup } from "reactstrap";

const SearchBar = () => {

    const locationRef = useRef('');
    const distanceRef = useRef(0);
    const maxGroupSizeRef = useRef(0);

    const handleSearch = () => {
        const location = locationRef.current.value;
        const distance = distanceRef.current.value;
        const maxGroupSize = maxGroupSizeRef.current.value;

        // Perform search or whatever action you need with these values
        console.log("Location:", location, "Distance:", distance, "Max Group Size:", maxGroupSize);
    };

    return (
        <Col lg='12'>
            <div className="search__bar">
                <Form className="d-flex align-items-center gap-4">
                    <FormGroup className="d-flex gap-3 form_group form__group-fast">
                        <span><i className="ri-map-pin-line"></i></span>
                        <div>
                            <h6>Location</h6>
                            <input type="text" placeholder="Where are you going?" ref={locationRef} />
                        </div>
                    </FormGroup>
                    <FormGroup className="d-flex gap-3 form_group form__group-fast">
                        <span><i className="ri-map-pin-time-line"></i></span>
                        <div>
                            <h6>Distance</h6>
                            <input type="number" placeholder="Distance in km" ref={distanceRef} />
                        </div>
                    </FormGroup>
                    <FormGroup className="d-flex gap-3 form_group form__group-fast">
                        <span><i className="ri-group-line"></i></span>
                        <div>
                            <h6>Max People</h6>
                            <input type="number" placeholder="Number of people" ref={maxGroupSizeRef} />
                        </div>
                    </FormGroup>
                    <span className="search_icon" type="submit" onClick={handleSearch}>
                        <i className="ri-search-line"></i>
                    </span>
                </Form>
            </div>
        </Col>
    );
};

export default SearchBar;
