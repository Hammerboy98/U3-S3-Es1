import { Row, Col } from 'react-bootstrap';
import { Bookmark, BookmarkFill } from 'react-bootstrap-icons';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  addToFavouriteAction,
  removeFromFavouriteAction,
} from '../redux/reducers/actions';

const Job = ({ data, favs }) => {
  const dispatch = useDispatch();

  const addToFavourite = (data) => {
    dispatch(addToFavouriteAction(data));
  };

  const removeFromFavourite = (data) => {
    dispatch(removeFromFavouriteAction(data.company_name));
  };

  return (
    <Row
      className='mx-0 mt-3 p-3'
      style={{ border: '1px solid #00000033', borderRadius: 4 }}
    >
      <Col xs={3}>
        {favs.includes(data.company_name) ? (
          <BookmarkFill
            className='icon me-2'
            onClick={() => {
              removeFromFavourite(data);
            }}
          />
        ) : (
          <Bookmark
            className='icon me-2'
            onClick={() => {
              addToFavourite(data);
            }}
          />
        )}

        <Link to={`/company/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={9}>
        <a href={data.url} target='_blank' rel='noreferrer'>
          {data.title}
        </a>
      </Col>
    </Row>
  );
};

export default Job;
