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
  default = "salomonterminal"
}

variable "cdn_location" {
  type = string
  default = "East US"
}

variable "cdn_profile_name" {
  type = string
}
/*
variable "cdn_endpoint_name " {
  type = string
}

variable "custom_domain" {
  type = string
}

variable "custom_domain_resource_name" {
  type = string
}