describe("", () => {
    it("Positif Case - Kategori Berhasil Ditambahkan", () => {
        cy.visit('https://kasirdemo.belajarqa.com')
        cy.url().should('include', '/login');

        // ===================================================================== Form Login =====================================================================
        // form email
        cy.get("#email-label");
        cy.get("#email")
            .type("tokosari@gmail.com")
            .focused().should('have.value', "tokosari@gmail.com")

        // form password 
        cy.get("#password-label");
        cy.get("#password")
            .type("saritoko36")
            .focused().should("have.value", "saritoko36")

        // form submit
        cy.get("#root > div > div > div > div.css-1w7v3tn > div > button").click();
        // =======================================================================================================================================================

        // Menu Kategori
        cy.get("#root > div > div > div.css-tnxwfz > div > a:nth-child(6) > div > div").click();
        cy.wait(5000);

        // Tambah Kategori
        cy.get("#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > a").click();
        cy.wait(5000);

        // ==================================================================== Form Kategori ====================================================================
        cy.get("#nama-label")
        cy.get("#nama")
            .type("Makanan Ringan")
            .should("have.value", "Makanan Ringan");
        cy.wait(5000);

        cy.get("#deskripsi-label");
        cy.get('#deskripsi')
            .type("makanan yang sering disantap di luar waktu makanan utama ")
            .should("have.value", "makanan yang sering disantap di luar waktu makanan utama ");
        cy.wait(5000);

        cy.get('button.chakra-button.css-l5lnz6')
            .contains('simpan')
            .click();
        cy.wait(5000);
        // =======================================================================================================================================================
    });

    it("Negatif Case - Kategori Gagal Ditambahkan", () => {
        cy.visit('https://kasirdemo.belajarqa.com')
        cy.url().should('include', '/login');

        // ===================================================================== Form Login =====================================================================
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
        // =======================================================================================================================================================

        // Menu Kategori
        cy.get("#root > div > div > div.css-tnxwfz > div > a:nth-child(6) > div > div").click();
        cy.wait(5000);

        // Tambah Kategori
        cy.get("#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > a").click();
        cy.wait(5000);

        // ==================================================================== Form Kategori ====================================================================
        cy.get("#deskripsi-label");
        cy.get('#deskripsi')
            .type("makanan yang sering disantap di luar waktu makanan utama ")
            .should("have.value", "makanan yang sering disantap di luar waktu makanan utama ");
        cy.wait(5000);

        cy.get('button.chakra-button.css-l5lnz6')
            .contains('simpan')
            .click();
        cy.wait(5000);
        // =======================================================================================================================================================
    });
});