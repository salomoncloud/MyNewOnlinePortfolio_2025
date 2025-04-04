resource "azurerm_cdn_profile" "cdn_profile" {
  name                = var.cdn_profile_name
  resource_group_name = var.resource_group_name
  location            = var.cdn_location
  sku                 = "Standard_Microsoft"
}

resource "azurerm_cdn_endpoint" "cdn_endpoint" {
  name                = var.cdn_endpoint_name 
  resource_group_name = var.resource_group_name
  profile_name        = azurerm_cdn_profile.cdn_profile.name
  location            = var.cdn_location

  origin {
    name      = "storage-origin"
    host_name = azurerm_storage_account.storage_account.primary_web_endpoint
    //The primary_web_endpoint property should return the static website URL, such as "myaccount.z6.web.core.windows.net"
  }
}

resource "azurerm_cdn_custom_domain" "custom_domain" {
  name                = var.custom_domain_resource_name
  resource_group_name = var.resource_group_name
  profile_name        = azurerm_cdn_profile.cdn_profile.name
  endpoint_name       = azurerm_cdn_endpoint.cdn_endpoint.name
  host_name           = var.custom_domain

  custom_https_configuration {
    certificate_source = "CdnManagedCertificate"
  }
}