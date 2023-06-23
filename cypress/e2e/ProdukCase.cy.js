
describe("Produk", () => {
    it("Positif Case - Berhasil Tambah Produk", () => {
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

        // ===================================================================== Form Produk =====================================================================
        // Menu Produk
        cy.get("#root > div > div > div.css-tnxwfz > div > a:nth-child(7) > div > div").click();
        cy.wait(5000);

        // Tambah Produk
        cy.get("#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > a").click();
        cy.wait(5000);

        // form nama produk
        cy.get("#nama-label")
        cy.get("#nama")
            .type("Richeese Nabati")
            .should("have.value", "Richeese Nabati")
        cy.wait(5000);

        // form deskripsi
        cy.get("#deskripsi-label")
        cy.get("#deskripsi")
            .type("Richeese Nabati terdiri dari kombinasi wafer krispi dan krim keju premium di setiap lapisnya.")
            .should("have.value", "Richeese Nabati terdiri dari kombinasi wafer krispi dan krim keju premium di setiap lapisnya.")
        cy.wait(5000);

        // form beli
        cy.get('[id="harga beli"]')
            .type("300")
            .should("have.value", "300");
        cy.wait(5000);

        // form jual
        cy.contains("harga jual");
        cy.get('[id="harga jual"]') // Perhatikan perubahan pada selector ID
            .type("500")
            .should("have.value", "500"); // Menghilangkan .focused()
        cy.wait(5000);

        // form kategori
        cy.get("#kategori-label");
        cy.get('#kategori').click()
        cy.get('td.css-u3dlpe')
            .contains('Umum')
            .click();
        cy.wait(5000);

        // button simpan
        cy.get('button.chakra-button.css-l5lnz6')
            .contains('simpan')
            .click();
        cy.wait(5000);
        // =======================================================================================================================================================
    });

    it("Negatif Case - Gagal Tambah Produk", () => {
        cy.visit('https://kasirdemo.belajarqa.com')
        cy.url().should('include', '/login');

        // ===================================================================== Form Login ======================================================================
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

        // ===================================================================== Form Produk =====================================================================
        // Menu Produk
        cy.get("#root > div > div > div.css-tnxwfz > div > a:nth-child(7) > div > div").click();
        cy.wait(5000);

        // Tambah Produk
        cy.get("#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > a").click();
        cy.wait(5000);

        // form nama produk
        cy.get("#nama-label")
        cy.get("#nama")
            .type("Richeese")
            .should("have.value", "Richeese Nabati");
        cy.wait(5000);

        // form jual
        cy.contains("harga jual");
        cy.get('[id="harga jual"]') // Perhatikan perubahan pada selector ID
            .type("500")
            .should("have.value", "500"); // Menghilangkan .focused()
        cy.wait(5000);

        // form kategori
        cy.get("#kategori-label");
        cy.get('#kategori').click()
        cy.get('td.css-u3dlpe')
            .contains('Umum')
            .click();
        cy.wait(5000);

        // button simpan
        cy.get('button.chakra-button.css-l5lnz6')
            .contains('simpan')
            .click();
        cy.wait(5000);
        // =======================================================================================================================================================
    });

    it("Negatif Case - Bug Produk", () => {
        cy.visit('https://kasirdemo.belajarqa.com')
        cy.url().should('include', '/login');

        // ===================================================================== Form Login ======================================================================
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
        cy.wait(5000);

        // Menu Produk
        cy.get("#root > div > div > div.css-tnxwfz > div > a:nth-child(7) > div > div").click();
        cy.wait(5000);

        // next button di list produk
        cy.get('div.css-1p5mhg7')
            .contains('>')
            .click()
        cy.wait(5000);
        // =======================================================================================================================================================
    });
});
