import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useAuthUser from "../hooks/useAuthUser";
import { getStreamToken } from "../lib/api";
import { useQuery } from "@tanstack/react-query";
import { StreamChat } from "stream-chat";
import toast from "react-hot-toast";
import {
  Channel,
  ChannelHeader,
  Chat,
  MessageInput,
  MessageList,
  Thread,
  Window,
} from "stream-chat-react";

const STREAM_API_KEY = import.meta.env.VITE_STREAM_API_KEY;

const ChatPage = () => {
  const { id: targetUserId } = useParams();

  const [chatClient, setChatClient] = useState(null);
  const [channel, setChannel] = useState(null);
  const [loading, setLoading] = useState(true);

  const { authUser } = useAuthUser();

  const { data: tokenData } = useQuery({
    queryKey: ["streamToken"],
    queryFn: getStreamToken,
    enabled: Boolean(authUser), // Only fetch if authUser is available
  });

  useEffect(() => {
    const initChat = async () => {
      if (!tokenData?.token || !authUser) return;

      try {
        console.log("Initializing stream chat client...");

        const client = StreamChat.getInstance(STREAM_API_KEY);
        await client.connectUser(
          {
            id: authUser._id,
            name: authUser.name,
            image: authUser.profilePicture,
          },
          tokenData.token
        );

        const channelId = [authUser._id, targetUserId].sort().join("__");
        const currentChannel = client.channel("messaging", channelId, {
          members: [authUser._id, targetUserId],
        });
        await currentChannel.watch();
        setChatClient(client);
        setChannel(currentChannel);
      } catch (error) {
        console.error("Error initializing chat client:", error);
        toast.error("Failed to initialize chat. Please try again.");
      } finally {
        setLoading(false);
      }
    };
  }, []);

  return <div>ChatPage</div>;
};

export default ChatPage;
