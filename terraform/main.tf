resource "azurerm_resource_group" "enterprise_rg" {
  name     = var.resource_group_name
  location = var.location
}