import {
    Alert,
    Button,
    Col,
    Container,
    ListGroup,
    ListGroupItem,
    Row,
  } from "react-bootstrap";
  import { useDispatch, useSelector } from "react-redux";
  import { Link } from "react-router-dom";
  import { FaTrashCan } from "react-icons/fa6";
  
  const FavouriteCompanies = () => {
    const favouriteCompany = useSelector(
      (state) => state.favouriteCompany.content
    );
  
    const dispatch = useDispatch();
  
    return (
      <Container>
        <Row>
          <Col xs={12}>
            <div className="d-flex justify-content-between align-items-center">
              <h1 className="display-2">Favourite Company</h1>
              <Link className="btn btn-primary" to="/">
                Home
              </Link>
            </div>
          </Col>
          <Col xs={12}>
            {favouriteCompany.length === 0 ? (
              <div className="d-flex justify-content-between align-items-center">
                <Alert className="m-0" variant="warning">
                  {" "}
                  No Favourite Company
                </Alert>
                <Link className="btn btn-primary" to="/">
                  Add Company
                </Link>
              </div>
            ) : (
              <ListGroup>
                {favouriteCompany.map((company) => (
                  <ListGroupItem
                    key={company}
                    className="d-flex justify-content-between align-items-center"
                  >
                    <Link to={`/${company}`} className="m-0">
                      {company}
                    </Link>
                    <Button
                      variant="danger"
                      onClick={() =>
                        dispatch({
                          type: "REMOVE_FROM_FAVOURITE",
                          payload: company,
                        })
                      }
                    >
                      <FaTrashCan />
                    </Button>
                  </ListGroupItem>
                ))}
              </ListGroup>
            )}
          </Col>
        </Row>
      </Container>
    );
  };
  
  export default FavouriteCompanies;