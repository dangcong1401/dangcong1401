import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Login(){
    return (
        <section>
            <h3 className="text-center mb-4">Register</h3>
            <Form>
      <Form.Group className="container" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="container" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>


      <Form.Group className="container" >
      <Button variant="primary" type="submit">
        Submit
      </Button>
      </Form.Group>
      </Form>
        </section>
    )
}