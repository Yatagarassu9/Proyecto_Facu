import { Button, Card, Col, Form, Row } from "react-bootstrap";

const NewBook = () => {
  return (
    <Card className="m-4 w-50" bg="success">
      <Card.Body>
        <Form className="text-white">
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="title">
                <Form.Label>Título</Form.Label>
                <Form.Control type="text" placeholder="Ingresar título" />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3" controlId="author">
                <Form.Label>Autor</Form.Label>
                <Form.Control type="text" placeholder="Ingresar autor" />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="rating">
                <Form.Label>Puntuación</Form.Label>
                <Form.Control type="number" max={5} min={0} />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3" controlId="pageCount">
                <Form.Label>Páginas</Form.Label>
                <Form.Control type="number" min={1} />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3" controlId="imageUrl">
            <Form.Label>URL imagen</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Form.Check
            type="switch"
            id="available"
            className="mb-3"
            label="¿Disponible?"
          />

          <Button type="submit">Agregar</Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default NewBook;