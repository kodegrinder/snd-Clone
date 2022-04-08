package snd

import "fmt"

// Script represents a script.
type Script struct {
	Name        string `json:"name"`
	Slug        string `json:"slug"`
	Author      string `json:"author"`
	Description string `json:"description"`
	Source      string `json:"source"`
	URL         string `json:"url"`
}

func (s Script) ID() string {
	return fmt.Sprintf("scrpt:%s+%s", s.Author, s.Slug)
}
