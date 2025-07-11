import { NextRequest, NextResponse } from "next/server";
import { Server } from "socket.io";
import { WebSocketServer } from 'ws';

let wss;

export async function GET(req) {
  if (!wss) {
    const server = req.socket?.server || req.node?.req?.socket?.server;

    if (!server) {
      return new Response('No server found', { status: 500 });
    }

    wss = new WebSocketServer({ server });

    wss.on('connection', (socket) => {
      console.log('Client connected');

      socket.on('message', (msg) => {
        console.log('Message:', msg.toString());

        // Broadcast to all clients
        wss.clients.forEach(client => {
          if (client.readyState === socket.OPEN) {
            client.send(`Echo: ${msg}`);
          }
        });
      });

      socket.on('close', () => {
        console.log('Client disconnected');
      });
    });

    console.log('WebSocket server started');
  }

  return new Response('WebSocket initialized');
}