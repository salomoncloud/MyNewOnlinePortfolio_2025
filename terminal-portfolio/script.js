document.addEventListener("DOMContentLoaded", function() {
    const terminal = document.getElementById("terminal");

    function printToTerminal(text) {
        terminal.innerHTML += text + "\n";
        window.scrollTo(0, document.body.scrollHeight);
    }

    printToTerminal("Welcome to Salomon's Portfolio. Type 'help' for a list of commands.");
});
