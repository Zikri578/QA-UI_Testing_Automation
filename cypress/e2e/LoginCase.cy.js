describe("Daftar", () => {
    it("Posifit Case - Daftar Berhasil", () => {
        cy.visit('https://kasirdemo.belajarqa.com')
        cy.url().should('include', '/login');

        cy.contains("ingin mencoba, daftar ?").click();
        cy.url().should('include', '/register');

        // form nama toko email
        cy.get("#name-label");
        cy.get("#name")
            .type('Toko Sari')
            .focused().should('have.value', 'Toko Sari')
        cy.wait(5000);

        // form email
        cy.get("#email-label");
        cy.get("#email")
            .type("tokosari@gmail.com")
            .focused().should('have.value', 'tokosari@gmail.com')
        cy.wait(5000);

        // form password
        cy.get("#password-label");
        cy.get("#password")
            .type("saritoko36")
            .focused().should('have.value', "saritoko36")
        cy.wait(5000);
        cy.get('.chakra-input__right-element.css-4qk9ai').click();
        cy.wait(5000);

        // button submit
        cy.get('#root>div>div>div>div.css-1w7v3tn>div>button').click();
        cy.wait(5000);
    });
});

describe('Login', () => {
    it('Positif Case - Login Sukses', () => {
        cy.visit('https://kasirdemo.belajarqa.com')
        cy.url().should('include', '/login');

        cy.contains("hai, kasirAja");
        cy.contains("kasirAja sebuah sistem POS simple, mudah, cepat, dan modern")
        cy.contains("sistem penjualan dan pembelian yang simple dengan pengelolan produk multi user. modern dengan dibangun diatas rest api dengan menggunakan nodejs, dapat diakses melalui web maupun perangkat mobile dengan aplikasi yang tersedia dan support dengan PWA");
        // cy.contains("- kasirAjaDev").click();

        // form email
        cy.get("#email-label");
        cy.get("#email")
            .type("tokosari@gmail.com")
            .focused().should('have.value', "tokosari@gmail.com")
        cy.wait(5000);

        // form password 
        cy.get("#password-label");
        cy.get("#password")
            .type("saritoko36")
            .focused().should("have.value", "saritoko36")
        cy.wait(5000);

        // form submit
        cy.get("#root > div > div > div > div.css-1w7v3tn > div > button").click();
        cy.wait(5000);
    });

    it("Negatif Case - Login Gagal (email invalid)", () => {
        cy.visit('https://kasirdemo.belajarqa.com')
        cy.url().should('include', '/login');

        // form email
        cy.get("#email-label");
        cy.get("#email")
            .type("toko@gmail.com")
            .focused().should('have.value', "tokosari@gmail.com")
        cy.wait(5000);

        // form password 
        cy.get("#password-label");
        cy.get("#password")
            .type("saritoko36")
            .focused().should("have.value", "saritoko36")
        cy.wait(5000);

        // form submit
        cy.get("#root > div > div > div > div.css-1w7v3tn > div > button").click();
        cy.wait(5000);
    });

    it("Negatif Case - Login Gagal (password invalid)", () => {
        cy.visit('https://kasirdemo.belajarqa.com')
        cy.url().should('include', '/login');

        // form email
        cy.get("#email-label");
        cy.get("#email")
            .type("tokosari@gmail.com")
            .focused().should('have.value', "tokosari@gmail.com")
        cy.wait(5000);

        // form password 
        cy.get("#password-label");
        cy.get("#password")
            .type("saritoko36")
            .focused().should("have.value", "sari36")
        cy.wait(5000);

        // form submit
        cy.get("#root > div > div > div > div.css-1w7v3tn > div > button").click();
        cy.wait(5000);
    });
});