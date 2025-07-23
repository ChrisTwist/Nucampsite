import { Button, Label, Col, FormGroup } from "reactstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { validateSignUpForm } from "../utils/validateSignUpForm";

const SignUpForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log('Sign-up form values:', values);
    console.log('in JSON format:', JSON.stringify(values));
    
    // Here you would typically send the data to your backend
    // For now, we'll just show a success message
    alert('Account created successfully! Welcome to NuCamp!');
    resetForm();
  };

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        phoneNum: "",
        agreeToTerms: false,
        subscribeNewsletter: true,
      }}
      onSubmit={handleSubmit}
      validate={validateSignUpForm}
    >
      <Form>
        {/* First Name */}
        <FormGroup row>
          <Label htmlFor="firstName" md="3">
            First Name *
          </Label>
          <Col md="9">
            <Field
              name="firstName"
              placeholder="Enter your first name"
              className="form-control"
            />
            <ErrorMessage name="firstName">
              {(msg) => <p className="text-danger">{msg}</p>}
            </ErrorMessage>
          </Col>
        </FormGroup>

        {/* Last Name */}
        <FormGroup row>
          <Label htmlFor="lastName" md="3">
            Last Name *
          </Label>
          <Col md="9">
            <Field
              name="lastName"
              placeholder="Enter your last name"
              className="form-control"
            />
            <ErrorMessage name="lastName">
              {(msg) => <p className="text-danger">{msg}</p>}
            </ErrorMessage>
          </Col>
        </FormGroup>

        {/* Username */}
        <FormGroup row>
          <Label htmlFor="username" md="3">
            Username *
          </Label>
          <Col md="9">
            <Field
              name="username"
              placeholder="Choose a unique username"
              className="form-control"
            />
            <ErrorMessage name="username">
              {(msg) => <p className="text-danger">{msg}</p>}
            </ErrorMessage>
          </Col>
        </FormGroup>

        {/* Email */}
        <FormGroup row>
          <Label htmlFor="email" md="3">
            Email Address *
          </Label>
          <Col md="9">
            <Field
              name="email"
              type="email"
              placeholder="Enter your email address"
              className="form-control"
            />
            <ErrorMessage name="email">
              {(msg) => <p className="text-danger">{msg}</p>}
            </ErrorMessage>
          </Col>
        </FormGroup>

        {/* Password */}
        <FormGroup row>
          <Label htmlFor="password" md="3">
            Password *
          </Label>
          <Col md="9">
            <Field
              name="password"
              type="password"
              placeholder="Create a strong password"
              className="form-control"
            />
            <ErrorMessage name="password">
              {(msg) => <p className="text-danger">{msg}</p>}
            </ErrorMessage>
          </Col>
        </FormGroup>

        {/* Confirm Password */}
        <FormGroup row>
          <Label htmlFor="confirmPassword" md="3">
            Confirm Password *
          </Label>
          <Col md="9">
            <Field
              name="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              className="form-control"
            />
            <ErrorMessage name="confirmPassword">
              {(msg) => <p className="text-danger">{msg}</p>}
            </ErrorMessage>
          </Col>
        </FormGroup>

        {/* Phone Number */}
        <FormGroup row>
          <Label htmlFor="phoneNum" md="3">
            Phone Number
          </Label>
          <Col md="9">
            <Field
              name="phoneNum"
              placeholder="XXX-XXX-XXXX (optional)"
              className="form-control"
            />
            <ErrorMessage name="phoneNum">
              {(msg) => <p className="text-danger">{msg}</p>}
            </ErrorMessage>
          </Col>
        </FormGroup>

        {/* Terms and Conditions */}
        <FormGroup row>
          <Col md={{ size: 9, offset: 3 }}>
            <Label check>
              <Field
                name="agreeToTerms"
                type="checkbox"
                className="form-check-input"
              />{" "}
              I agree to the{" "}
              <a href="#terms" className="text-primary">
                Terms and Conditions
              </a>{" "}
              and{" "}
              <a href="#privacy" className="text-primary">
                Privacy Policy
              </a>
              *
            </Label>
            <ErrorMessage name="agreeToTerms">
              {(msg) => <p className="text-danger">{msg}</p>}
            </ErrorMessage>
          </Col>
        </FormGroup>

        {/* Newsletter Subscription */}
        <FormGroup row>
          <Col md={{ size: 9, offset: 3 }}>
            <Label check>
              <Field
                name="subscribeNewsletter"
                type="checkbox"
                className="form-check-input"
              />{" "}
              Subscribe to our newsletter for camping tips and special offers
            </Label>
          </Col>
        </FormGroup>

        {/* Submit Button */}
        <FormGroup row>
          <Col md={{ size: 9, offset: 3 }}>
            <Button type="submit" color="success" size="lg" block>
              <i className="fa fa-user-plus"></i> Create Account
            </Button>
          </Col>
        </FormGroup>

        {/* Login Link */}
        <FormGroup row>
          <Col md={{ size: 9, offset: 3 }} className="text-center">
            <p className="mt-3">
              Already have an account?{" "}
              <a href="/login" className="text-primary">
                Sign in here
              </a>
            </p>
          </Col>
        </FormGroup>
      </Form>
    </Formik>
  );
};

export default SignUpForm;
