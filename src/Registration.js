import React from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

function Registration() {
  const validationSchema = Yup.object().shape({
  //   name: Yup.string().required("Please Enter the Name").uppercase(),
  //  // name:yup.string().length(limit: 5 | Ref, message?: string | function),
  //   username: Yup.string().required("Please Enter the UserName"),
  //   password: Yup.string().required("Please Enter the Password"),
  //   gurdianType: Yup.string().required(),
  //   gurdianName: Yup.string().required(),
  //   address: Yup.string().required(),
  //   citizenship: Yup.string().required(),
  //   state: Yup.string().required(),
  //   country: Yup.string().required(),
       Email: Yup.string().required().email(),
  //   gender: Yup.string().required(),
  //   martialStatus: Yup.string().required(),
       contactNumber: Yup.string().required().max(10),
    // dob: Yup.string().required(),
     dob:Yup.string().test(
      "DOB",
      "error message",
      value => {
        return moment().diff(moment(value),'years') >= 18;
      }
    ),
    // accountType: Yup.string().required(),
    // branchName: Yup.string().required(),
    // citizenStatus: Yup.string().required(),
    // initialAmount: Yup.string().required(),
    // identificationType: Yup.string().required(),
    // identificationDocumentNumber: Yup.string().required(),
    // refAccountHolderName: Yup.string().required(),
     refAccountNumber: Yup.string().required(),
    // refAddress: Yup.string().required(),
    // Email: Yup.string().required("Title is required"),

  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;
  function onSubmit(data) {
    // display form data on success
    alert("SUCCESS!! :-)\n\n" + JSON.stringify(data, null, 4));
    return false;
  }
  return (
    
    <div>
      <Form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Form.Row>
        
          <Form.Group as={Col} md="4">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              {...register("name")}
              isInvalid={errors.name}
            />
            <Form.Control.Feedback type="invalid" tooltip>
              {errors.name?.message}
            </Form.Control.Feedback>
          </Form.Group>
        
       
          <Form.Group as={Col} md="4">
            <Form.Label>UserName</Form.Label>
            <Form.Control
              type="text"
              {...register("username")}
              isInvalid={errors.username}
            />
            <Form.Control.Feedback type="invalid" tooltip>
              {errors.username?.message}
            </Form.Control.Feedback>
          </Form.Group>
        
        
          <Form.Group as={Col} md="4">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              {...register("password")}
              isInvalid={errors.password}
            />
            <Form.Control.Feedback type="invalid" tooltip>
              {errors.password?.message}
            </Form.Control.Feedback>
          </Form.Group>
        
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="4" value="-1">
            <Form.Label>Gurdian Type</Form.Label>
            <Form.Control
              as="select"
              custom
              {...register("gurdianType")}
              isInvalid={errors.gurdianType === "-1"}
            >
              {console.log(errors.gurdianType)}
              <option value="-1">Choose</option>
              <option value="Parental">Parental</option>
              <option value="Spouse">Spouse</option>
              <option value="Other">Other</option>
            </Form.Control>
            <Form.Control.Feedback type="invalid" tooltip>
              {errors.gurdianType?.message}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4">
            <Form.Label>GurdianName</Form.Label>
            <Form.Control
              type="text"
              {...register("gurdianName")}
              isInvalid={errors.gurdianName}
            />
            <Form.Control.Feedback type="invalid" tooltip>
              {errors.gurdianName?.message}
            </Form.Control.Feedback>
          </Form.Group>
       
          <Form.Group as={Col} md="4">
            <Form.Label>Address</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              {...register("address")}
              isInvalid={errors.address}
            />
            <Form.Control.Feedback type="invalid" tooltip>
              {errors.address?.message}
            </Form.Control.Feedback>
          </Form.Group>
          </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="4" value="-1">
            <Form.Label>Citizenship</Form.Label>
            <Form.Control
              as="select"
              custom
              {...register("citizenship")}
              isInvalid={errors.citizenship == "-1"}
            >
              {console.log(errors.citizenship)}
              <option value="-1">Choose</option>
              <option value="India">Indian</option>
              <option value="Australia">Not Inidan</option>
            </Form.Control>
            <Form.Control.Feedback type="invalid" tooltip>
              {errors.citizenship?.message}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4">
            <Form.Label>State</Form.Label>
            <Form.Control
              as="select"
              custom
              {...register("state")}
              isInvalid={errors.state == "-1"}
            >
              {console.log(errors.state)}
              <option value="-1">Choose</option>
              <option value="India">Tamilnadu</option>
              <option value="Australia">Karnatka</option>
              <option value="Usar">Kerala</option>
            </Form.Control>
            <Form.Control.Feedback type="invalid" tooltip>
              {errors.state?.message}
            </Form.Control.Feedback>
          </Form.Group>
        
          <Form.Group as={Col} md="4">
            <Form.Label>Country</Form.Label>
            <Form.Control
              as="select"
              custom
              {...register("country")}
              isInvalid={errors.country == "-1"}
            >
              {console.log(errors.country)}
              <option value="-1">Choose</option>
              <option value="India">India</option>
              <option value="Australia">Australia</option>
              <option value="Usar">USA</option>
            </Form.Control>
            <Form.Control.Feedback type="invalid" tooltip>
              {errors.country?.message}
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} md="4">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              {...register("Email")}
              isInvalid={errors.Email}
            />
            <Form.Control.Feedback type="invalid" tooltip>
              {errors.Email?.message}
            </Form.Control.Feedback>
          </Form.Group>
       
        <Form.Group as={Col} md="4" value="-1">
            <Form.Label>Gender</Form.Label>
            <Form.Control
              as="select"
              custom
              {...register("gender")}
              isInvalid={errors.gender == "-1"}
            >
              {console.log(errors.gender)}
              <option value="-1">Choose</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </Form.Control>
            <Form.Control.Feedback type="invalid" tooltip>
              {errors.gender?.message}
            </Form.Control.Feedback>
          </Form.Group>
       
          <Form.Group as={Col} md="4" value="-1">
            <Form.Label>MartialStatus</Form.Label>
            <Form.Control
              as="select"
              custom
              {...register("martialStatus")}
              isInvalid={errors.martialStatus == "-1"}
            >
              {console.log(errors.MartialStatus)}
              <option value="-1">Choose</option>
              <option value="India">Single</option>
              <option value="Australia">Married</option>
              <option value="Usar">Divorced</option>
            </Form.Control>
            <Form.Control.Feedback type="invalid" tooltip>
              {errors.martialStatus?.message}
            </Form.Control.Feedback>
          </Form.Group>
          </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="4">
            <Form.Label>Contact Number</Form.Label>
            <Form.Control
              type="number"
              {...register("contactNumber")}
              isInvalid={errors.contactNumber}
            />
            <Form.Control.Feedback type="invalid" tooltip>
              {errors.contactNumber?.message}
            </Form.Control.Feedback>
          </Form.Group>
          
          <Form.Group as={Col} md="4">
            <Form.Label>Date Of Birth</Form.Label>
            <Form.Control
              type="date"
              {...register("dob")}
              isInvalid={errors.dob}
            />
            <Form.Control.Feedback type="invalid" tooltip>
              {errors.dob?.message}
            </Form.Control.Feedback>
          </Form.Group>
          
          <Form.Group as={Col} md="4">
            <Form.Label>Registration Date</Form.Label>
            <Form.Control
              type="date"
              {...register("registrationDate")}
              isInvalid={errors.registrationDate}
            />
            <Form.Control.Feedback type="invalid" tooltip>
              {errors.registrationDate?.message}
            </Form.Control.Feedback>
          </Form.Group>
          </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="4" value="-1">
            <Form.Label>Account Type </Form.Label>
            <Form.Control
              as="select"
              custom
              {...register("accountType")}
              isInvalid={errors.accountType == "-1"}
            >
              {console.log(errors.accountType)}
              <option value="-1">Choose</option>
              <option value="Parental">Saving</option>
              <option value="Spouse">Salary</option>
            </Form.Control>
            <Form.Control.Feedback type="invalid" tooltip>
              {errors.accountType?.message}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4">
            <Form.Label>Branch Name</Form.Label>
            <Form.Control
              type="text"
              {...register("branchName")}
              isInvalid={errors.branchName}
            />
            <Form.Control.Feedback type="invalid" tooltip>
              {errors.branchName?.message}
            </Form.Control.Feedback>
          </Form.Group>
          
          <Form.Group as={Col} md="4" value="-1">
            <Form.Label>Citizen Status</Form.Label>
            <Form.Control
              as="select"
              custom
              {...register("citizenStatus")}
              isInvalid={errors.citizenStatus == "-1"}
            >
              {console.log(errors.citizenStatus)}
              <option value="-1">Choose</option>
              <option value="Parental">Minior</option>
              <option value="Spouse">Normal</option>
              <option value="Spouse">Senior</option>
            </Form.Control>
            <Form.Control.Feedback type="invalid" tooltip>
              {errors.citizenStatus?.message}
            </Form.Control.Feedback>
          </Form.Group>
          </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="4">
            <Form.Label>Initial Deposit amount</Form.Label>
            <Form.Control
              type="text"
              {...register("initialAmount")}
              isInvalid={errors.initialAmount}
            />
            <Form.Control.Feedback type="invalid" tooltip>
              {errors.initialAmount?.message}
            </Form.Control.Feedback>
          </Form.Group>
       
          <Form.Group as={Col} md="4" value="-1">
            <Form.Label>Identification Type</Form.Label>
            <Form.Control
              as="select"
              custom
              {...register("identificationType")}
              isInvalid={errors.identificationType == "-1"}
            >
              {console.log(errors.identificationType)}
              <option value="-1">Choose</option>
              <option value="Parental">Aadhar</option>
              <option value="Spouse">Pan</option>
            </Form.Control>
            <Form.Control.Feedback type="invalid" tooltip>
              {errors.identificationType?.message}
            </Form.Control.Feedback>
          </Form.Group>
         
          <Form.Group as={Col} md="4">
            <Form.Label>Identification Document Number</Form.Label>
            <Form.Control
              type="text"
              {...register("identificationDocumentNumber")}
              isInvalid={errors.identificationDocumentNumber}
            />
            <Form.Control.Feedback type="invalid" tooltip>
              {errors.identificationDocumentNumber?.message}
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="4">
            <Form.Label>Reference Account holder Name</Form.Label>
            <Form.Control
              type="text"
              {...register("refAccountHolderName")}
              isInvalid={errors.refAccountHolderName}
            />
            <Form.Control.Feedback type="invalid" tooltip>
              {errors.refAccountHolderName?.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4">
            <Form.Label>Reference Account Number</Form.Label>
            <Form.Control
              type="number"
              {...register("refAccountNumber")}
              isInvalid={errors.refAccountNumber}
            />
            <Form.Control.Feedback type="invalid" tooltip>
              {errors.refAccountNumber?.message}
            </Form.Control.Feedback>
          </Form.Group>
        
          <Form.Group as={Col} md="4">
            <Form.Label>Reference Account Holder Address</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              {...register("refAddress")}
              isInvalid={errors.refAddress}
            />
            <Form.Control.Feedback type="invalid" tooltip>
              {errors.refAddress?.message}
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>

        {/* <Form.Row>
          <Form.Group as={Col} controlId="exampleForm.SelectCustom" value="-1">
            <Form.Label>Custom select</Form.Label>
            <Form.Control
              as="select"
              custom
              {...register("email")}
              isInvalid={errors.email == "-1"}
            >
              {console.log(errors.email)}
              <option value="-1">Choose</option>
              <option value="3">1</option>
              <option value="2">2</option>
              <option value="1">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </Form.Control>
            <Form.Control.Feedback type="invalid" tooltip>
              {errors.email?.message}
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row> */}
        {/* <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            {...register("email")}
            type="text"
            placeholder="Enter email"
            isInvalid={errors.email}
          />
          <Form.Control.Feedback type="invalid" tooltip>
            {errors.email?.message}
          </Form.Control.Feedback>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group> */}

        {/* <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control {...register('pass')}type="password" placeholder="Password" />
        </Form.Group> */}
        {/* <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
    
  );
}

export default Registration;
