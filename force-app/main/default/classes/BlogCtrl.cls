public with sharing class BlogCtrl {
    @AuraEnabled(cacheable=true)
    public static List<Blog__c> getAllBlogs() {
        return [SELECT Name, Author__c, Topic__c, Title__c, Body__c
                FROM Blog__c
                WITH SECURITY_ENFORCED];
    }

    /*
    *    1. Get all the topic names from blog records - apex1
    *    2. Refine them just to have unique topic names - apex1
    */
    @AuraEnabled(cacheable=true)
    public static List<String> getTopicNames() {
        Set<String> topics = new Set<String>();
        for(Blog__c blog : [SELECT Topic__c FROM Blog__c WITH SECURITY_ENFORCED]) {
            topics.add(blog.Topic__c);
        }
        List<String> topicNames = new List<String>();
        topicNames.addAll(topics);
        return topicNames;
    }

    @AuraEnabled 
    public static List<Blog__c> getBlogsByTopic(String topic) {
        return [SELECT Name, Topic__c, Author__c, Title__c, Body__c 
                FROM Blog__c
                WHERE Topic__c = :topic
                WITH SECURITY_ENFORCED];
    }
}
