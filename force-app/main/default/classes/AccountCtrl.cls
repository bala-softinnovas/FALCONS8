public with sharing class AccountCtrl {
    @AuraEnabled(cacheable=true)
    public static List<Account> getTopAccounts() {
        return [SELECT Name, Type, Industry, AnnualRevenue
                FROM Account
                WHERE AnnualRevenue != null
                WITH SECURITY_ENFORCED
                ORDER BY AnnualRevenue DESC
                LIMIT 10];
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountsByIndustry(String industry) {
        return [SELECT Name, Type, Industry, AnnualRevenue
                FROM Account
                WHERE Industry = :industry
                WITH SECURITY_ENFORCED
                LIMIT 10];
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountsByType(String type) {
        return [SELECT Name, Type, Industry, AnnualRevenue
                FROM Account
                WHERE Type = :type
                WITH SECURITY_ENFORCED
                LIMIT 10];
    }
}
