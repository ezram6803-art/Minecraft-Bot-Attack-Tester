module.exports = {
    // Server Connection Details
    server: {
        host: "ap3.nzb.zelpstore.id",
        port: 26677,
        version: "1.21.11" // Updated to match your server version
    },

    // Bot Configuration
    bots: {
        count: 200, // Number of bots to spawn
        joinDelay: 3000, // Delay between each bot joining (ms)
    },

    // Naming Strategy
    naming: {
        type: "random", // "sequential" (Name1, Name2) or "random" (Xy8kL9)
        baseName: "StressBot", // Used for sequential naming
        randomLength: 8 // Length of random names
    },

    // Authentication / On Join Command
    auth: {
        enabled: true,
        // Command to execute after joining. 
        // useful for /register <password> or /login <password>
        command: "/register password123",
        delay: 3000 // Time to wait after spawning before sending command (ms)
    },

    // Spam Configuration
    spam: {
        enabled: false,
        interval: 10, // Time between messages (ms)
        messages: [
            "HAY HYPNOS TOLOL",
            "YA KACUNG LU",
            "Lag test in progress",
            "Bot attack simulation",
            "Please ignore this bot"
        ]
    }
};
