import { useState } from 'react';
import { Container, Row, Col, Form, Spinner, Alert } from 'react-bootstrap';
import Job from './Job';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchedCompaniesAction } from '../redux/reducers/actions/index';

const MainSearch = () => {
  const [query, setQuery] = useState('');

  const content = useSelector((state) => {
    return state.favourites.favCompanies;
  });

  const dispatch = useDispatch();

  const jobsFound = useSelector((state) => state.searched.searchedCompanies);
  const isLoading = useSelector((state) => state.searched.isLoading);
  const errorMessage = useSelector((state) => state.searched.errorMessage);
  const noResults = useSelector((state) => state.searched.noResults);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(getSearchedCompaniesAction(query));
    setQuery('');
  };

  return (
    <Container>
      <Row>
        <Col xs={10} className='mx-auto my-3'>
          <h1 className='display-1'>Remote Jobs Search</h1>
        </Col>
        <Col xs={10} className='mx-auto'>
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type='search'
              value={query}
              onChange={handleChange}
              placeholder='type and press Enter'
            />
          </Form>
        </Col>

        {isLoading && !errorMessage && (
          <Col xs={10} className='mx-auto mb-5 mt-4'>
            <Spinner variant='info' />
          </Col>
        )}

        {errorMessage && (
          <Col xs={10} className='mx-auto mt-3'>
            <Alert variant='danger'>{errorMessage}</Alert>
          </Col>
        )}

        {noResults && (
          <Col xs={10} className='mx-auto mb-5 mt-3'>
            <Alert variant='secondary' className='lead'>
              La ricerca non ha prodotto risultati!
            </Alert>
          </Col>
        )}

        {jobsFound.length > 0 && (
          <Col xs={10} className='mx-auto mb-5'>
            {jobsFound.map((jobData) => (
              <Job key={jobData._id} data={jobData} favs={content} />
            ))}
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default MainSearch;
