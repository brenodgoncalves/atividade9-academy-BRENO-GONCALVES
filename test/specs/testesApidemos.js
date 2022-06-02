describe("Teste apidemos.apk", () => {
    afterEach(async() =>{
        driver.reset();
    });
    
    it("Fluxo e utilização do aplicativo em App/Alert Dialogs/OK CANCEL DIALOG WITH MESSAGE", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Alert Dialogs").className("android.widget.TextView")').click();
        await $("id=two_buttons").click();
        await $("id=alertTitle").isDisplayed();
        await $('android=new UiSelector().text("OK").className("android.widget.Button")').click();
    });

    it("Fluxo e utilização do aplicativo em App/Alert Dialogs/LIST DIALOG", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Alert Dialogs").className("android.widget.TextView")').click();
        await $("id=select_button").click();
        await $('android=new UiSelector().text("Header title").className("android.widget.TextView")').isDisplayed();
    });

    it("Fluxo e utilização do aplicativo em App/Fragment/Hide and Show", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Fragment").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Hide and Show").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Demonstration of hiding and showing fragments.").className("android.widget.TextView")').click();
        await $("id=frag1hide").click();
        await $("id=frag2hide").click();
        const clickBotao1 = await $("id=frag1hide").getText();
        expect(clickBotao1).toBe("Show");
        const clickBotao2 = await $("id=frag2hide").getText();
        expect(clickBotao2).toBe("Show");
    });

    it("Fluxo e utilização do aplicativo em App/Action Bar/Display options, verificando a opção DISPLAY_HOME_AS_UP", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Action Bar").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Display Options").className("android.widget.TextView")').click();
        await $("id=toggle_show_home").click();
        const textoTitulo = await $("android.widget.TextView").getText();
        expect(textoTitulo).toBe("App/Action Bar/Display Options");
    });

    it("Fluxo e utilização do aplicativo em App/Action Bar/Display options, verificando a opção DISPLAY_SHOW_TITLE", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Action Bar").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Display Options").className("android.widget.TextView")').click();
        await $("id=toggle_show_title").click();
        const textoTitulo = await $("android.view.ViewGroup").getText();
        expect(textoTitulo).toBe("");
    });

    it("Fluxo e utilização do aplicativo em App/Action Bar/Display options, verificando a opção DISPLAY_SHOW_CUSTOM", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Action Bar").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Display Options").className("android.widget.TextView")').click();
        await $("id=toggle_show_custom").click();
        const buttonSuperior = await $("android.widget.Button").getText();
        expect(buttonSuperior).toBe("Custom View!");
    });

    it("Fluxo e utilização do aplicativo em App/Action Bar/Display options, verificando a opção DISPLAY_SHOW_NAVIGATION", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Action Bar").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Display Options").className("android.widget.TextView")').click();
        await $("id=toggle_navigation").click();
    });

});