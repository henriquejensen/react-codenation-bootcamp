import React from "react";
import { Link } from "react-router-dom";
import { Row, Button } from "react-bootstrap";
import RecordsTable from "../components/RecordsTable";

function ReadRecords({ products = [] }) {
  return (
    <>
      <Row>
        <h1>Read Records</h1>
      </Row>
      <Row>
        <Link to="/product/create">
          <Button variant="primary" size="sm">
            Create Record
          </Button>
        </Link>
      </Row>
      <Row>
        <RecordsTable products={products} />
      </Row>
    </>
  );
}

export default ReadRecords;
