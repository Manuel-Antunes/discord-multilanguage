package main

import (
	"fmt"
	"log"

	"github.com/bwmarrin/discordgo"
)

func main() {
	discord, err := discordgo.New("Bot " + "OTQ4MjM0NjQzNjQ2MzE2NjU0.Yh42VA.ik2kYLqooOi_ToQXSMHfUbuIHmQ")
	if err != nil {
		log.Fatalf("An error occurred: %q", err)
	}
	fmt.Printf("discord connected: %q", discord.UserAgent)
}
