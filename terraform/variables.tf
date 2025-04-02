variable "subscription_id" {
  type = string
}

variable "client_id" {
  type = string
}

variable "client_secret" {
  type = string
}

variable "tenant_id" {
  type = string
}

variable "location" {
  type = string
  default = "Canada East"
}

variable "resource_group_name" {
  type = string
  default = "Terminal_Portfolio"
}

variable "storage_account_name" {
  type = string
  default = "TerminalStorage"
}