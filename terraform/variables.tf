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
  default = "_salomon_"
}
variable "cdn_endpoint_name" {
  type = string
  default = "_salomon514cdn"
}

variable "custom_domain" {
  type = string
  default = "www.salomon.it.com"
}

variable "custom_domain_resource_name" {
  type = string
  default = "salomonit"
}