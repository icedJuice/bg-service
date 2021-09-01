import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminService } from './admin/admin.service';
import { ServerService } from './server/server.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, AdminService, ServerService],
})
export class AppModule {}
