package com.bryan.libarterbe.DTO;

public class MessageCreateDTO {
    String body;

    int conversationId;

    public MessageCreateDTO(String body, int conversationId) {
        this.body = body;
        this.conversationId = conversationId;
    }

    public int getConversationId() {
        return conversationId;
    }

    public void setConversationId(int conversationId) {
        this.conversationId = conversationId;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }
}
