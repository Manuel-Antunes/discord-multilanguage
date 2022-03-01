package main

import (
	"fmt"
	"log"
	"os"

	"github.com/bwmarrin/discordgo"
	"github.com/joho/godotenv"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}
	discord, err := discordgo.New("Bot " + os.Getenv("DISCORD_TOKEN"))
	if err != nil {
		log.Fatalf("An error occurred: %q", err)
	}
	if err := discord.Open(); err != nil {
		log.Fatalf("Connection error: %q", err)
	}
	defer discord.Close()
	fmt.Printf("discord connected: %q", discord.UserAgent)
}
