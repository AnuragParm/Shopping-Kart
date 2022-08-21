import {
  Navbar,
  Container,
  FormControl,
  Nav,
  Dropdown,
  Badge,
  Button,
} from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { CartState } from "../context/Context";

const header = () => {
  const {
    state: { cart },
    dispatch,
    productDispatch,
  } = CartState();
  return (
    <Navbar bg="dark" fixed="top" variant="dark" style={{ height: 80 }}>
      <Container>
        <Navbar.Brand>
          <Link to="/">Shopping Kart</Link>
        </Navbar.Brand>
        <Navbar.Text className="search">
          <FormControl
            style={{ width: 500 }}
            placeholder="Search a product"
            className="m-auto"
            onChange={(i) => {
              productDispatch({
                type: "FILTER_BY_SEARCH",
                payload: i.target.value,
              });
            }}
          />
        </Navbar.Text>
        <Nav>
          <Dropdown align="end">
            <Dropdown.Toggle variant="success">
              <FaShoppingCart color="white" fontSize="25px" />

              <Badge className="cartBadge">{cart.length}</Badge>
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ minWidth: 370 }}>
              {cart.length > 0 ? (
                <>
                  {cart.map((prod) => (
                    <span className="cartItem" key={prod.id}>
                      <img
                        src={prod.image}
                        className="cartItemImg"
                        alt={prod.name}
                      />
                      <div className="cartItemDetail">
                        <span>{prod.name}</span>
                        <span>$ {prod.price.split(".")[0]}</span>
                      </div>
                      <AiFillDelete
                        fontSize="20px"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: prod,
                          })
                        }
                      />
                    </span>
                  ))}
                  <Link to="/cart">
                    <Button
                      style={{ width: "95%", margin: "0 10px", fontSize: 10 }}
                    >
                      Go TO Cart
                    </Button>
                  </Link>
                </>
              ) : (
                <span style={{ padding: 10, fontSize: 10 }}>
                  Cart is Empty!
                </span>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default header;
