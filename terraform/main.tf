resource "azurerm_resource_group" "enterprise_rg" {
  name     = var.resource_group_name
  location = var.location
}
# I realized here when I was copy pasting from an old project that I forgot to change the name enterprise_rg to something more relevant! oh well, not a big deal!