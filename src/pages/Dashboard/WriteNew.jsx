import { FaBars } from "react-icons/fa";
import Sidebar from "../../components/Sidebar";
import "./styles.scss";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Row,Col } from "react-bootstrap";
import diary_image from "../../assets/diary_entry_image.svg";


const WriteNew = ({
  collapsed,
  toggled,
  handleToggleSidebar,
  handleCollapsedChange,
}) => {
  return (
    <div className={`app ${toggled ? "toggled" : ""}`}>
      <Sidebar
        collapsed={collapsed}
        toggled={toggled}
        handleToggleSidebar={handleToggleSidebar}
        handleCollapsedChange={handleCollapsedChange}
      />
      <main>
        <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
          <FaBars />
        </div>
        <Row>
          <Col className="diary-entry">
          <h3>How was your day ?</h3>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control as="textarea" placeholder="Enter Your day here :)" rows ={18}/>
              </Form.Group>
              <Button variant="primary" type="submit">
                Save
              </Button>
            </Form>
          </Col>
          <Col className="diary_entry_image">
            <img src={diary_image} alt=""/>
          </Col>
        </Row>
      </main>
    </div>
  );
};

export default WriteNew;
