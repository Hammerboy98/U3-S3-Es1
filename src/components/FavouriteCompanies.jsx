import { Alert, Col, Container, ListGroup } from 'react-bootstrap';
import { Trash } from 'react-bootstrap-icons';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromFavouriteAction } from '../redux/reducers/actions';

const FavouriteCompanies = () => {
  const content = useSelector((state) => {
    return state.favourites.favCompanies;
  });

  const dispatch = useDispatch();

  const removeFromFavourite = (companyName) => {
    dispatch(removeFromFavouriteAction(companyName));
  };

  return (
    <Container>
      <Col xs={10} className='mx-auto my-3'>
        <h1 className='display-1'>Your favourite companies:</h1>
        <ListGroup>
          {content.map((company, i) => {
            return (
              <ListGroup.Item key={i}>
                <Trash
                  className='icon me-2'
                  onClick={() => {
                    removeFromFavourite(company);
                  }}
                />
                <Link to={`/company/${company}`}>{company}</Link>
              </ListGroup.Item>
            );
          })}
        </ListGroup>

        {content.length === 0 && (
          <Alert variant='secondary' className='lead'>
            No company in your favourites
          </Alert>
        )}
      </Col>
    </Container>
  );
};

export default FavouriteCompanies;