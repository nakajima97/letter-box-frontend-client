import storeListDummyData from '../../src/components/organisms/StoreAutocomplete/MockApiServerResponseData';
import employeeListDummyData from '../../src/components/organisms/EmployeeAutocomplete/MockAPIServerResponseData';

describe('メッセージ送信機能のE2Eテストを開始', () => {
  it('メッセージ送信機能をテスト', () => {
    cy.intercept('GET', 'http://localhost:3000/api/v1/stores?count=*', {
      statusCode: 200,
      body: storeListDummyData,
    });
    cy.intercept(
      'GET',
      'http://localhost:3000/api/v1/stores/search?keyword=*',
      {
        statusCode: 200,
        body: storeListDummyData,
      },
    );
    cy.intercept(
      'GET',
      'http://localhost:3000/api/v1/employees/search?store_id=*',
      {
        statusCode: 200,
        body: employeeListDummyData,
      },
    );
    cy.intercept('POST', 'http://localhost:3000/api/v1/messages', {
      statusCode: 201,
    });

    cy.visit('http://localhost:3001');
    cy.get('.stores-autocomplete').type('{downarrow}').type('{enter}');
    cy.get('.employee-autocomplete').type('{downarrow}').type('{enter}');
    cy.get('.message-form').type('ありがとうございます。');
    cy.get('.submit').click();
  });
});
