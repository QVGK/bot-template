// Dependencies
import { Command } from "@sapphire/framework";

// Command
export default class extends Command {
    constructor(context, options) {
        super(context, { ...options });
    }

    /**
     *
     * @param {Command.Registry} registry
     */
    registerApplicationCommands(registry) {
        registry.registerChatInputCommand((builder) =>
            builder
                .setName("ping")
                .setDescription("Ping bot to see if it is alive")
        );
    }

    /**
     *
     * @param {Command.ChatInputCommandInteraction} interaction
     */
    async chatInputRun(interaction) {
        return await interaction.reply({
            ephemeral: true,
            content: "Hello!",
        });
    }
}
